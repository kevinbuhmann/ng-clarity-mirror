/*
 * Copyright (c) 2016-2025 Broadcom. All Rights Reserved.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { TreeNodeModel } from './tree-node.model';

/*
 * A declarative model is built by traversing the Angular component tree.
 * Declarative = Tree node components dictate the model
 */
export class DeclarativeTreeNodeModel<T> extends TreeNodeModel<T> {
  // Override for a more precise type
  parent: DeclarativeTreeNodeModel<T> | null;
  children: DeclarativeTreeNodeModel<T>[];

  constructor(parent: DeclarativeTreeNodeModel<T> | null) {
    super();
    this.parent = parent;
    if (parent) {
      parent._addChild(this);
    }
    this.children = [];
  }

  override destroy() {
    if (this.parent) {
      this.parent._removeChild(this);
    }
    super.destroy();
  }

  _addChild(child: DeclarativeTreeNodeModel<T>) {
    this.children.push(child);
  }

  _removeChild(child: DeclarativeTreeNodeModel<T>) {
    const index = this.children.indexOf(child);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }
}
