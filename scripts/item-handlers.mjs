import { openModal } from "./modal.mjs";

/** Handles table item click. */
export function onTableItemClicked(company) {
  openModal(company);
}

/** Handles legend item click. */
export function onLegendItemClicked(legendItem) {
  const tableItems = Array.from(document.getElementsByClassName(legendItem.id));

  if (legendItem.checked) {
    legendItem.parentElement.classList.add('selected');
    tableItems.forEach(item => item.classList.add('highlight'));
  } else {
    legendItem.parentElement.classList.remove('selected');
    tableItems.forEach(item => item.classList.remove('highlight'));
  }
}
