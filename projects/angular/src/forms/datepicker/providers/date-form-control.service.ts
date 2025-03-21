/*
 * Copyright (c) 2016-2025 Broadcom. All Rights Reserved.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DateFormControlService {
  disabled: boolean;

  private _touchedChange = new Subject<void>();
  private _dirtyChange = new Subject<void>();

  get touchedChange(): Observable<void> {
    return this._touchedChange.asObservable();
  }

  get dirtyChange(): Observable<void> {
    return this._dirtyChange.asObservable();
  }

  markAsTouched(): void {
    this._touchedChange.next();
  }

  markAsDirty(): void {
    this._dirtyChange.next();
  }

  // friendly wrapper
  setDisabled(state: boolean) {
    this.disabled = state;
  }
}
