/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { VerticalNavCases } from '../vertical-nav-cases';

@Component({
  selector: 'clr-vertical-nav-collapsible-demo',
  templateUrl: './vertical-nav-collapsible.demo.html',
  styleUrls: ['../vertical-nav.demo.scss'],
})
export class VerticalNavCollapsibleDemo {
  case: any;
  collapsible = true;

  private _collapse = true;

  constructor(public verticalNavCases: VerticalNavCases) {
    this.case = this.verticalNavCases.basicMenu;
  }

  get collapse(): boolean {
    return this._collapse;
  }
  set collapse(value: boolean) {
    this._collapse = value;
  }

  toggleCollapsible(): void {
    this.collapsible = !this.collapsible;
  }

  toggleCollapse(): void {
    this.collapse = !this.collapse;
  }
}
