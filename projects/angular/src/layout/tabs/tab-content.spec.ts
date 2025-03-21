/*
 * Copyright (c) 2016-2025 Broadcom. All Rights Reserved.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IF_ACTIVE_ID_PROVIDER, IfActiveService } from '../../utils/conditional/if-active.service';
import { TabsService } from './providers/tabs.service';
import { ClrTabContent } from './tab-content';

@Component({
  selector: 'test-wrapper',
  template: `<ng-container #tabContentViewContainer></ng-container>`,
})
class TestWrapper {
  constructor(private tabsService: TabsService) {}

  @ViewChild('tabContentViewContainer', { read: ViewContainerRef, static: true })
  set tabContentViewContainer(value: ViewContainerRef) {
    this.tabsService.tabContentViewContainer = value;
  }
}

@Component({
  template: `
    <test-wrapper>
      <clr-tab-content>Content1</clr-tab-content>
    </test-wrapper>
  `,
})
class TestComponent {}

describe('TabContent', () => {
  let fixture: ComponentFixture<any>;
  let compiled: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, TestWrapper, ClrTabContent],
      providers: [IfActiveService, IF_ACTIVE_ID_PROVIDER, TabsService],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('projects template content', () => {
    expect(compiled.textContent.trim()).toMatch('Content1');
  });
});
