/*
 * Copyright (c) 2016-2024 Broadcom. All Rights Reserved.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import {
  angleIcon,
  calendarIcon,
  checkCircleIcon,
  ClarityIcons,
  eventIcon,
  exclamationCircleIcon,
} from '@cds/core/icon';

import { ClrIconModule } from '../../icon/icon.module';
import { CdkTrapFocusModule } from '../../utils/cdk/cdk-trap-focus.module';
import { ClrConditionalModule } from '../../utils/conditional/conditional.module';
import { ClrHostWrappingModule } from '../../utils/host-wrapping/host-wrapping.module';
import { ClrPopoverModuleNext } from '../../utils/popover/popover.module';
import { ClrCommonFormsModule } from '../common/common.module';
import { ClrCalendar } from './calendar';
import { ClrDateContainer } from './date-container';
import { ClrDateInput } from './date-input';
import { ClrDateInputValidator } from './date-input.validator';
import { ClrDatepickerActions } from './datepicker-action-buttons';
import { ClrDatepickerViewManager } from './datepicker-view-manager';
import { ClrDay } from './day';
import { ClrDaypicker } from './daypicker';
import { ClrMonthpicker } from './monthpicker';
import { ClrYearpicker } from './yearpicker';

export const CLR_DATEPICKER_DIRECTIVES: Type<any>[] = [
  ClrDay,
  ClrDateContainer,
  ClrDateInput,
  ClrDateInputValidator,
  ClrDatepickerViewManager,
  ClrMonthpicker,
  ClrYearpicker,
  ClrDaypicker,
  ClrCalendar,
  ClrDatepickerActions,
];

@NgModule({
  imports: [
    CommonModule,
    CdkTrapFocusModule,
    ClrHostWrappingModule,
    ClrConditionalModule,
    ClrPopoverModuleNext,
    ClrIconModule,
    ClrCommonFormsModule,
  ],
  declarations: [CLR_DATEPICKER_DIRECTIVES],
  exports: [CLR_DATEPICKER_DIRECTIVES],
})
export class ClrDatepickerModule {
  constructor() {
    ClarityIcons.addIcons(exclamationCircleIcon, checkCircleIcon, angleIcon, eventIcon, calendarIcon);
  }
}
