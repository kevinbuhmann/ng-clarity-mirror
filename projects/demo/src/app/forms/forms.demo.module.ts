/*
 * Copyright (c) 2016-2025 Broadcom. All Rights Reserved.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { FormsA11yDemo } from './a11y/a11y';
import { FormsCheckboxDemo } from './controls/checkbox';
import { FormsFileDemo } from './controls/file';
import { FormsRadioDemo } from './controls/radio';
import { FormsSelectDemo } from './controls/select';
import { FormsTextDemo } from './controls/text';
import { FormsTextareaDemo } from './controls/textarea';
import { DynamicControlsDemo } from './dynamic-controls/dynamic-controls.demo';
import { FormsDemo } from './forms.demo';
import { ROUTING } from './forms.demo.routing';
import { FormsGenericContainerDemo } from './generic-container/generic-container';
import { FormsInputGroupDemo } from './input-group/input-group';
import { FormsLayoutCompactAngularDemo } from './layout-angular/layout-compact-angular';
import { FormsLayoutCompactAngularGridDemo } from './layout-angular/layout-compact-angular-grid';
import { FormsLayoutHorizontalAngularGridDemo } from './layout-angular/layout-horizontal-angular-grid';
import { FormsLayoutHorizontalAngularDemo } from './layout-angular/layout-horizontal-grid';
import { FormsLayoutVerticalAngularDemo } from './layout-angular/layout-vertical-grid';
import { FormsLayoutCompactDemo } from './layout/layout-compact';
import { FormsLayoutCompactGridDemo } from './layout/layout-compact-grid';
import { FormsLayoutHorizontalDemo } from './layout/layout-horizontal';
import { FormsLayoutHorizontalGridDemo } from './layout/layout-horizontal-grid';
import { FormsLayoutModalDemo } from './layout/layout-modal';
import { FormsLayoutVerticalDemo } from './layout/layout-vertical';
import { FormsLayoutVerticalGridDemo } from './layout/layout-vertical-grid';
import { FormsReactiveDemo, FormsReactiveOnPushDemo } from './reactive/reactive';
import { FormsResetDemo } from './reset/reset';
import { FormsTemplateDrivenDemo, FormsTemplateDrivenOnPushDemo } from './template-driven/template-driven';
import { FormsValidationDemo } from './validation/validation';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ClarityModule, ROUTING],
  declarations: [
    FormsDemo,
    FormsInputGroupDemo,
    FormsLayoutVerticalDemo,
    FormsLayoutHorizontalDemo,
    FormsLayoutCompactDemo,
    FormsLayoutVerticalGridDemo,
    FormsLayoutHorizontalGridDemo,
    FormsLayoutCompactGridDemo,
    FormsLayoutModalDemo,
    FormsLayoutCompactAngularDemo,
    FormsLayoutHorizontalAngularDemo,
    FormsLayoutVerticalAngularDemo,
    FormsLayoutHorizontalAngularGridDemo,
    FormsLayoutCompactAngularGridDemo,
    FormsTextDemo,
    FormsCheckboxDemo,
    FormsFileDemo,
    FormsRadioDemo,
    FormsSelectDemo,
    FormsTextareaDemo,
    FormsTemplateDrivenDemo,
    FormsTemplateDrivenOnPushDemo,
    FormsReactiveDemo,
    FormsReactiveOnPushDemo,
    FormsResetDemo,
    FormsA11yDemo,
    FormsGenericContainerDemo,
    FormsValidationDemo,
    DynamicControlsDemo,
  ],
  exports: [
    FormsDemo,
    FormsInputGroupDemo,
    FormsLayoutVerticalDemo,
    FormsLayoutHorizontalDemo,
    FormsLayoutCompactDemo,
    FormsLayoutVerticalGridDemo,
    FormsLayoutHorizontalGridDemo,
    FormsLayoutCompactGridDemo,
    FormsLayoutModalDemo,
    FormsLayoutCompactAngularDemo,
    FormsLayoutHorizontalAngularDemo,
    FormsLayoutVerticalAngularDemo,
    FormsTextDemo,
    FormsCheckboxDemo,
    FormsFileDemo,
    FormsRadioDemo,
    FormsSelectDemo,
    FormsTextareaDemo,
    FormsTemplateDrivenDemo,
    FormsTemplateDrivenOnPushDemo,
    FormsReactiveDemo,
    FormsReactiveOnPushDemo,
    FormsResetDemo,
    FormsA11yDemo,
    FormsGenericContainerDemo,
    FormsValidationDemo,
    DynamicControlsDemo,
  ],
})
export class FormsDemoModule {}
