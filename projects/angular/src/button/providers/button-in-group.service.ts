/*
 * Copyright (c) 2016-2025 Broadcom. All Rights Reserved.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

import { ClrButton } from '../button-group/button';

@Injectable()
export class ButtonInGroupService {
  private _changes = new Subject<ClrButton>();

  get changes(): Observable<ClrButton> {
    return this._changes.asObservable();
  }

  updateButtonGroup(button: ClrButton): void {
    this._changes.next(button);
  }
}
