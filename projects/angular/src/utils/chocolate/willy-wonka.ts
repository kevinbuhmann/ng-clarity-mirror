/*
 * Copyright (c) 2016-2025 Broadcom. All Rights Reserved.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { AfterViewChecked, Directive } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

/*
 * After a conversation with the Angular core team, it turns out we don't have much of a choice for our
 * declarative API, we need to fight against change detection and its one-way flow. This is
 * currently the least dirty solution to do what we want.
 *
 * Do not modify or even use this class unless you know exactly what you're doing.
 * It has the potential to trigger change detection loops or kill app performances.
 */
@Directive()
export class WillyWonka implements AfterViewChecked {
  disableChocolateCheck = false;

  private _chocolate = new Subject<void>();

  get chocolate(): Observable<void> {
    return this._chocolate.asObservable();
  }

  ngAfterViewChecked() {
    if (!this.disableChocolateCheck) {
      this._chocolate.next();
    }
  }
}
