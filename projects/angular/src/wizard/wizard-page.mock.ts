/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { TemplateRef } from '@angular/core';

export class MockPage {
  id: string;
  disabled = false;
  current = false;
  completed = false;
  readyToComplete = false;
  hasError = false;
  navTitle: TemplateRef<any>;

  constructor(pageIndex: number) {
    this.id = 'this-is-my-page-id-' + pageIndex++;
  }

  reset(): void {
    this.disabled = false;
    this.current = false;
    this.completed = false;
    this.readyToComplete = false;
    this.hasError = false;
  }
}
