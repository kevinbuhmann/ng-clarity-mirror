/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const clrUiAppBackgroundColorCache = {};

export function getClrUiAppBackgroundColor(themeKey) {
  return (
    clrUiAppBackgroundColorCache[themeKey] ||
    (clrUiAppBackgroundColorCache[themeKey] = computeClrUiAppBackgroundColor())
  );

  function computeClrUiAppBackgroundColor() {
    const mainContainerElement = document.createElement('div');
    mainContainerElement.classList.add('main-container');
    document.body.appendChild(mainContainerElement);

    const appBackgroundColor = getComputedStyle(mainContainerElement).getPropertyValue('background-color');

    mainContainerElement.remove();

    return appBackgroundColor;
  }
}
