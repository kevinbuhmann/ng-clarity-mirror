/*
 * Copyright (c) 2016-2025 Broadcom. All Rights Reserved.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { InjectionToken } from '@angular/core';
let nbTabsComponent = 0;
export const TABS_ID = new InjectionToken('TABS_ID');
export function tokenFactory() {
    return 'clr-tabs-' + nbTabsComponent++;
}
export const TABS_ID_PROVIDER = {
    provide: TABS_ID,
    useFactory: tokenFactory,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1pZC5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXIvc3JjL2xheW91dC90YWJzL3RhYnMtaWQucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFFSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9DLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztBQUV4QixNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFjLENBQVMsU0FBUyxDQUFDLENBQUM7QUFFN0QsTUFBTSxVQUFVLFlBQVk7SUFDMUIsT0FBTyxXQUFXLEdBQUcsZUFBZSxFQUFFLENBQUM7QUFDekMsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHO0lBQzlCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLFVBQVUsRUFBRSxZQUFZO0NBQ3pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjUgQnJvYWRjb20uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGUgdGVybSBcIkJyb2FkY29tXCIgcmVmZXJzIHRvIEJyb2FkY29tIEluYy4gYW5kL29yIGl0cyBzdWJzaWRpYXJpZXMuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmxldCBuYlRhYnNDb21wb25lbnQgPSAwO1xuXG5leHBvcnQgY29uc3QgVEFCU19JRCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxudW1iZXI+KCdUQUJTX0lEJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbkZhY3RvcnkoKSB7XG4gIHJldHVybiAnY2xyLXRhYnMtJyArIG5iVGFic0NvbXBvbmVudCsrO1xufVxuXG5leHBvcnQgY29uc3QgVEFCU19JRF9QUk9WSURFUiA9IHtcbiAgcHJvdmlkZTogVEFCU19JRCxcbiAgdXNlRmFjdG9yeTogdG9rZW5GYWN0b3J5LFxufTtcbiJdfQ==