/**
 * Renders HTML elements created by given function inside a root element.
 * @param {array} items List of items to be rendered.
 * @param {string} rootElementId The ID of the element to be used as root.
 * @param {function} createHTMLElement Function that returns an HTMLElement of an item.
 */
export function render(items, rootElementId, createHTMLElement) {
  const rootElement = document.getElementById(rootElementId);
  rootElement.innerHTML = '';
  items.forEach(item => rootElement.appendChild(createHTMLElement(item)));
}
