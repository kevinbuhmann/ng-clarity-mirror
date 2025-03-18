/*
 * Copyright (c) 2016-2025 Broadcom. All Rights Reserved.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
// @TODO The top two are not used now, which is probably a performance drag that was broken along the way.
// There was a previous pattern to hide everything to do computation then display, for Firefox, needs revisiting.
export const NO_LAYOUT_CLASS = 'datagrid-no-layout';
export const COMPUTE_WIDTH_CLASS = 'datagrid-computing-columns-width';
export const STRICT_WIDTH_CLASS = 'datagrid-fixed-width';
export const HIDDEN_COLUMN_CLASS = 'datagrid-hidden-column';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci9zcmMvZGF0YS9kYXRhZ3JpZC9yZW5kZXIvY29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHO0FBRUgsMEdBQTBHO0FBQzFHLGlIQUFpSDtBQUNqSCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsb0JBQW9CLENBQUM7QUFDcEQsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsa0NBQWtDLENBQUM7QUFDdEUsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsc0JBQXNCLENBQUM7QUFDekQsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjUgQnJvYWRjb20uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGUgdGVybSBcIkJyb2FkY29tXCIgcmVmZXJzIHRvIEJyb2FkY29tIEluYy4gYW5kL29yIGl0cyBzdWJzaWRpYXJpZXMuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbi8vIEBUT0RPIFRoZSB0b3AgdHdvIGFyZSBub3QgdXNlZCBub3csIHdoaWNoIGlzIHByb2JhYmx5IGEgcGVyZm9ybWFuY2UgZHJhZyB0aGF0IHdhcyBicm9rZW4gYWxvbmcgdGhlIHdheS5cbi8vIFRoZXJlIHdhcyBhIHByZXZpb3VzIHBhdHRlcm4gdG8gaGlkZSBldmVyeXRoaW5nIHRvIGRvIGNvbXB1dGF0aW9uIHRoZW4gZGlzcGxheSwgZm9yIEZpcmVmb3gsIG5lZWRzIHJldmlzaXRpbmcuXG5leHBvcnQgY29uc3QgTk9fTEFZT1VUX0NMQVNTID0gJ2RhdGFncmlkLW5vLWxheW91dCc7XG5leHBvcnQgY29uc3QgQ09NUFVURV9XSURUSF9DTEFTUyA9ICdkYXRhZ3JpZC1jb21wdXRpbmctY29sdW1ucy13aWR0aCc7XG5leHBvcnQgY29uc3QgU1RSSUNUX1dJRFRIX0NMQVNTID0gJ2RhdGFncmlkLWZpeGVkLXdpZHRoJztcbmV4cG9ydCBjb25zdCBISURERU5fQ09MVU1OX0NMQVNTID0gJ2RhdGFncmlkLWhpZGRlbi1jb2x1bW4nO1xuIl19