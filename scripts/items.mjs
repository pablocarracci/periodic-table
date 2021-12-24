import { onTableItemClicked, onLegendItemClicked } from "./item-handlers.mjs";
import { toAttr } from "./utils.mjs";

/** Returns an HTML element of the table item. */
export function createTableItem(company) {
  const tableItem = document.createElement('div');
  tableItem.className = 'table-item';
  tableItem.style.gridRow = company.Linha;
  tableItem.style.gridColumn = company.Coluna;
  tableItem.style.color = company.Cor;
  tableItem.style.backgroundColor = company.Cor;
  tableItem.addEventListener('click', () => onTableItemClicked(company));

  const tableItemInner = document.createElement('div');
  tableItemInner.className = 'table-item-inner';
  tableItemInner.classList.add(toAttr(company.Grupo));

  const shortTitle = document.createElement('div');
  shortTitle.className = 'short-title';
  shortTitle.innerHTML = company.Abreviacao;

  const title = document.createElement('div');
  title.className = 'title';
  title.innerHTML = company.Nome;

  tableItem.appendChild(tableItemInner);
  tableItemInner.appendChild(shortTitle);
  tableItemInner.appendChild(title);

  return tableItem;
}

/** Returns an HTML element of the legend item. */
export function createLegendItem(group) {
  const legendItem = document.createElement('div');
  legendItem.className = 'legend-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = toAttr(group);
  checkbox.addEventListener('click', (e) => onLegendItemClicked(e.target));

  const marker = document.createElement('div');
  marker.className = 'legend-item-marker';
  const markerColor = document.querySelector('.' + toAttr(group)).parentElement.style.color;
  marker.style.backgroundColor = markerColor;

  const label = document.createElement('label');
  label.htmlFor = toAttr(group);
  label.innerHTML = group;

  legendItem.appendChild(checkbox);
  legendItem.appendChild(marker);
  legendItem.appendChild(label);

  return legendItem;
}
