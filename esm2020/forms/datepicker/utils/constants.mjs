/*
 * Copyright (c) 2016-2025 Broadcom. All Rights Reserved.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * This is the en-001 short locale date format. Setting as default.
 */
export const DEFAULT_LOCALE_FORMAT = 'dd/MM/y';
// https://en.wikipedia.org/wiki/Date_format_by_country
export const LITTLE_ENDIAN_REGEX = /d+.+m+.+y+/i;
export const MIDDLE_ENDIAN_REGEX = /m+.+d+.+y+/i;
// No need for BIG_ENDIAN_REGEX because anything that doesn't satisfy the above 2
// is automatically BIG_ENDIAN
export const DELIMITER_REGEX = /d+|m+|y+/i;
export const USER_INPUT_REGEX = /\d+/g;
export const MOBILE_USERAGENT_REGEX = /Mobi/i;
export const RTL_REGEX = /\u200f/g;
export const YEAR = 'YYYY';
export const MONTH = 'MM';
export const DATE = 'DD';
export const LITTLE_ENDIAN = {
    name: 'LITTLE_ENDIAN',
    format: [DATE, MONTH, YEAR],
};
export const MIDDLE_ENDIAN = {
    name: 'MIDDLE_ENDIAN',
    format: [MONTH, DATE, YEAR],
};
export const BIG_ENDIAN = {
    name: 'BIG_ENDIAN',
    format: [YEAR, MONTH, DATE],
};
export const NO_OF_DAYS_IN_A_WEEK = 7;
export const NO_OF_ROWS_IN_CALENDAR_VIEW = 6;
export const TOTAL_DAYS_IN_DAYS_VIEW = NO_OF_DAYS_IN_A_WEEK * NO_OF_ROWS_IN_CALENDAR_VIEW;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci9zcmMvZm9ybXMvZGF0ZXBpY2tlci91dGlscy9jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7QUFFSDs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLFNBQVMsQ0FBQztBQUUvQyx1REFBdUQ7QUFDdkQsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsYUFBYSxDQUFDO0FBQ2pELE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLGFBQWEsQ0FBQztBQUNqRCxpRkFBaUY7QUFDakYsOEJBQThCO0FBRTlCLE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxXQUFXLENBQUM7QUFFM0MsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO0FBRXZDLE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHLE9BQU8sQ0FBQztBQUU5QyxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBRW5DLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUM7QUFDM0IsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQztBQUMxQixNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBU3pCLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBMkI7SUFDbkQsSUFBSSxFQUFFLGVBQWU7SUFDckIsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUM7Q0FDNUIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBMkI7SUFDbkQsSUFBSSxFQUFFLGVBQWU7SUFDckIsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7Q0FDNUIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBMkI7SUFDaEQsSUFBSSxFQUFFLFlBQVk7SUFDbEIsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUM7Q0FDNUIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLENBQUMsQ0FBQztBQUN0QyxNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FBRyxDQUFDLENBQUM7QUFDN0MsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQVcsb0JBQW9CLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LTIwMjUgQnJvYWRjb20uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBUaGUgdGVybSBcIkJyb2FkY29tXCIgcmVmZXJzIHRvIEJyb2FkY29tIEluYy4gYW5kL29yIGl0cyBzdWJzaWRpYXJpZXMuXG4gKiBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLlxuICogVGhlIGZ1bGwgbGljZW5zZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgaW4gTElDRU5TRSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBwcm9qZWN0LlxuICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgZW4tMDAxIHNob3J0IGxvY2FsZSBkYXRlIGZvcm1hdC4gU2V0dGluZyBhcyBkZWZhdWx0LlxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9MT0NBTEVfRk9STUFUID0gJ2RkL01NL3knO1xuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9EYXRlX2Zvcm1hdF9ieV9jb3VudHJ5XG5leHBvcnQgY29uc3QgTElUVExFX0VORElBTl9SRUdFWCA9IC9kKy4rbSsuK3krL2k7XG5leHBvcnQgY29uc3QgTUlERExFX0VORElBTl9SRUdFWCA9IC9tKy4rZCsuK3krL2k7XG4vLyBObyBuZWVkIGZvciBCSUdfRU5ESUFOX1JFR0VYIGJlY2F1c2UgYW55dGhpbmcgdGhhdCBkb2Vzbid0IHNhdGlzZnkgdGhlIGFib3ZlIDJcbi8vIGlzIGF1dG9tYXRpY2FsbHkgQklHX0VORElBTlxuXG5leHBvcnQgY29uc3QgREVMSU1JVEVSX1JFR0VYID0gL2QrfG0rfHkrL2k7XG5cbmV4cG9ydCBjb25zdCBVU0VSX0lOUFVUX1JFR0VYID0gL1xcZCsvZztcblxuZXhwb3J0IGNvbnN0IE1PQklMRV9VU0VSQUdFTlRfUkVHRVggPSAvTW9iaS9pO1xuXG5leHBvcnQgY29uc3QgUlRMX1JFR0VYID0gL1xcdTIwMGYvZztcblxuZXhwb3J0IGNvbnN0IFlFQVIgPSAnWVlZWSc7XG5leHBvcnQgY29uc3QgTU9OVEggPSAnTU0nO1xuZXhwb3J0IGNvbnN0IERBVEUgPSAnREQnO1xuXG5leHBvcnQgdHlwZSBGb3JtYXRUeXBlID0gJ0xJVFRMRV9FTkRJQU4nIHwgJ01JRERMRV9FTkRJQU4nIHwgJ0JJR19FTkRJQU4nO1xuXG5leHBvcnQgdHlwZSBJbnB1dERhdGVEaXNwbGF5Rm9ybWF0ID0ge1xuICByZWFkb25seSBuYW1lOiBGb3JtYXRUeXBlO1xuICByZWFkb25seSBmb3JtYXQ6IFtzdHJpbmcsIHN0cmluZywgc3RyaW5nXTtcbn07XG5cbmV4cG9ydCBjb25zdCBMSVRUTEVfRU5ESUFOOiBJbnB1dERhdGVEaXNwbGF5Rm9ybWF0ID0ge1xuICBuYW1lOiAnTElUVExFX0VORElBTicsXG4gIGZvcm1hdDogW0RBVEUsIE1PTlRILCBZRUFSXSxcbn07XG5cbmV4cG9ydCBjb25zdCBNSURETEVfRU5ESUFOOiBJbnB1dERhdGVEaXNwbGF5Rm9ybWF0ID0ge1xuICBuYW1lOiAnTUlERExFX0VORElBTicsXG4gIGZvcm1hdDogW01PTlRILCBEQVRFLCBZRUFSXSxcbn07XG5cbmV4cG9ydCBjb25zdCBCSUdfRU5ESUFOOiBJbnB1dERhdGVEaXNwbGF5Rm9ybWF0ID0ge1xuICBuYW1lOiAnQklHX0VORElBTicsXG4gIGZvcm1hdDogW1lFQVIsIE1PTlRILCBEQVRFXSxcbn07XG5cbmV4cG9ydCBjb25zdCBOT19PRl9EQVlTX0lOX0FfV0VFSyA9IDc7XG5leHBvcnQgY29uc3QgTk9fT0ZfUk9XU19JTl9DQUxFTkRBUl9WSUVXID0gNjtcbmV4cG9ydCBjb25zdCBUT1RBTF9EQVlTX0lOX0RBWVNfVklFVzogbnVtYmVyID0gTk9fT0ZfREFZU19JTl9BX1dFRUsgKiBOT19PRl9ST1dTX0lOX0NBTEVOREFSX1ZJRVc7XG4iXX0=