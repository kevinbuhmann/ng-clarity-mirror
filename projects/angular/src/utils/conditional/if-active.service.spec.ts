/*
 * Copyright (c) 2016-2025 Broadcom. All Rights Reserved.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { IfActiveService } from './if-active.service';

export default function (): void {
  describe('IfActiveService provider', function () {
    let ifActiveService: IfActiveService;

    beforeEach(function () {
      ifActiveService = new IfActiveService();
    });

    describe('Typescript API', function () {
      it('provides an observable for changes', function () {
        let nbChanges = 0;
        let currentChange: number;

        // Subscribe first
        ifActiveService.currentChange.subscribe((change: number) => {
          nbChanges++;
          currentChange = change;
        });

        // Initial state expectations
        expect(ifActiveService).toBeDefined();
        expect(nbChanges).toEqual(0);
        expect(currentChange).not.toBeDefined();

        // First change
        ifActiveService.current = 10;
        expect(nbChanges).toEqual(1);
        expect(currentChange).toEqual(10);

        // Second change
        ifActiveService.current = 11;
        expect(nbChanges).toEqual(2);
        expect(currentChange).toEqual(11);
      });

      it('tracks the current active value in the service', function () {
        expect(ifActiveService.current).not.toBeDefined();
        ifActiveService.current = 5;
        expect(ifActiveService.current).toEqual(5);
      });
    });
  });
}
