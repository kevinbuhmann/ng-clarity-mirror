/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'clr-move-button-in-menu-demo',
  templateUrl: './move-button-in-menu.html',
  styleUrls: ['../../button-group.demo.scss'],
})
export class MoveButtonInMenuDemo {
  flip = false;

  toggleFlip() {
    this.flip = !this.flip;
  }
}
