/*
 * Copyright (c) 2016-2025 Broadcom. All Rights Reserved.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClrAccordionTitle } from './accordion-title';
import { ClrAccordionModule } from './accordion.module';

@Component({
  template: `<clr-accordion-title>Hello world</clr-accordion-title>`,
})
class TestComponent {}

describe('ClrAccordionTitle', () => {
  describe('View', () => {
    let fixture: ComponentFixture<any>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [ClrAccordionModule],
      });

      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
    });

    it('projects content', () => {
      expect(fixture.nativeElement.textContent.trim()).toMatch('Hello world');
    });

    it('adds a .clr-accordion-title class on the host element', () => {
      const accordionTitleElement = fixture.debugElement.query(By.directive(ClrAccordionTitle)).nativeElement;
      expect(accordionTitleElement.classList.contains('clr-accordion-title')).toBe(true);
    });
  });
});
