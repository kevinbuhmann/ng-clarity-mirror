/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ChangeDetectorRef, Directive, Optional } from '@angular/core';

import { OompaLoompa } from '../../../utils/chocolate/oompa-loompa';
import { IfExpandService } from '../../../utils/conditional/if-expanded.service';
import { StepperWillyWonka } from './stepper-willy-wonka';

@Directive({
  selector: 'clr-stepper-panel, [clrStepButton]',
})
export class StepperOompaLoompa extends OompaLoompa {
  private expand: IfExpandService;

  constructor(cdr: ChangeDetectorRef, @Optional() willyWonka: StepperWillyWonka, ifExpandService: IfExpandService) {
    if (!willyWonka) {
      throw new Error('clr-stepper-panel should only be used inside of clrStepper');
    }
    super(cdr, willyWonka);
    this.expand = ifExpandService;
  }

  get flavor() {
    return this.expand.expanded;
  }
}
