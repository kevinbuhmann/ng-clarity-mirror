/*
 * Copyright (c) 2016-2025 Broadcom. All Rights Reserved.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './generic-container.html',
})
export class FormsGenericContainerDemo {
  model = {
    basic: '',
    container: '',
    required: '',
    cars: [3],
  };

  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab', disabled: true },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  reactiveModel = this.fb.group({
    basic: new FormControl(),
    container: new FormControl(),
    required: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/asdfasdf/)]),
    cars: new FormControl([3], [Validators.required]),
  });

  constructor(private fb: FormBuilder) {}

  submit() {
    console.log(this);
  }
}
