/*
 * Copyright (c) 2016-2025 Broadcom. All Rights Reserved.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable, Optional, Renderer2, SkipSelf } from '@angular/core';
import { isObservable, of } from 'rxjs';

import { ArrowKeyDirection } from './arrow-key-direction.enum';
import { FocusableItem } from './focusable-item/focusable-item';

@Injectable()
export class FocusService {
  private _current: FocusableItem;
  private _unlistenFuncs: (() => void)[] = [];

  constructor(private renderer: Renderer2) {}

  get current() {
    return this._current;
  }

  reset(first: FocusableItem) {
    this._current = first;
  }

  listenToArrowKeys(el: HTMLElement) {
    // The following listeners return false when there was an action to take for the key pressed,
    // in order to prevent the default behavior of that key.
    this._unlistenFuncs.push(this.renderer.listen(el, 'keydown.arrowup', () => !this.move(ArrowKeyDirection.UP)));
    this._unlistenFuncs.push(this.renderer.listen(el, 'keydown.arrowdown', () => !this.move(ArrowKeyDirection.DOWN)));
    this._unlistenFuncs.push(this.renderer.listen(el, 'keydown.arrowleft', () => !this.move(ArrowKeyDirection.LEFT)));
    this._unlistenFuncs.push(this.renderer.listen(el, 'keydown.arrowright', () => !this.move(ArrowKeyDirection.RIGHT)));
  }

  registerContainer(el: HTMLElement, tabIndex = '0') {
    this.renderer.setAttribute(el, 'tabindex', tabIndex);
    this.listenToArrowKeys(el);
    // The following listeners return false when there was an action to take for the key pressed,
    // in order to prevent the default behavior of that key.
    this._unlistenFuncs.push(this.renderer.listen(el, 'keydown.space', () => !this.activateCurrent()));
    this._unlistenFuncs.push(this.renderer.listen(el, 'keydown.enter', () => !this.activateCurrent()));
  }

  moveTo(item: FocusableItem) {
    /**
     * Make sure that item is not undefined,
     * This is safety net in the case that someone sometime decide to
     * call this method without having FocusableItem.
     */
    if (item === undefined) {
      return;
    }

    if (this.current) {
      this.current.blur();
    }
    item.focus();
    this._current = item;
  }

  move(direction: ArrowKeyDirection): boolean {
    let moved = false;
    if (this.current) {
      const next = this.current[direction];
      if (next) {
        // Turning the value into an Observable isn't great, but it's the fastest way to avoid code duplication.
        // If performance ever matters for this, we can refactor using additional private methods.
        const nextObs = isObservable(next) ? next : of(next);
        nextObs.subscribe(item => {
          if (item) {
            this.moveTo(item);
            moved = true;
          }
        });
      }
    }
    return moved;
  }

  activateCurrent() {
    if (this.current && this.current.activate) {
      this.current.activate();
      return true;
    }
    return false;
  }

  detachListeners() {
    this._unlistenFuncs.forEach(unlisten => unlisten());
  }
}

export function clrFocusServiceFactory(existing: FocusService, renderer: Renderer2) {
  return existing || new FocusService(renderer);
}

export const FOCUS_SERVICE_PROVIDER = {
  provide: FocusService,
  useFactory: clrFocusServiceFactory,
  deps: [[new Optional(), new SkipSelf(), FocusService], Renderer2],
};
