async function main() {
    const companies = await getData();
    renderTable(companies);

    const groups = [...new Set(companies.map(c => c.Grupo))];
    renderLegend(groups);

    setEventListeners();
}

function renderTable(companies) {
    render(companies, 'table-inner', createTableItem);
}

function renderLegend(groups) {
    render(groups, 'legend-inner', createLegendItem);
}

/** Returns an HTML element of the table item. */
function createTableItem(company) {
    let tableItem = document.createElement('div');
    tableItem.className = 'table-item';
    tableItem.style.gridRow = company.Linha;
    tableItem.style.gridColumn = company.Coluna;
    tableItem.style.color = company.Cor;
    tableItem.style.backgroundColor = company.Cor;
    tableItem.addEventListener('click', () => onTableItemClicked(company));

    let tableItemInner = document.createElement('div');
    tableItemInner.className = 'table-item-inner';
    tableItemInner.classList.add(toAttr(company.Grupo));

    let shortTitle = document.createElement('div');
    shortTitle.className = 'short-title';
    shortTitle.innerHTML = company.Abreviacao;

    let title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = company.Nome;

    tableItem.appendChild(tableItemInner);
    tableItemInner.appendChild(shortTitle);
    tableItemInner.appendChild(title);

    return tableItem;
}

/** Returns an HTML element of the legend item. */
function createLegendItem(group) {
    let legendItem = document.createElement('div');
    legendItem.className = 'legend-item';

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = toAttr(group);
    checkbox.addEventListener('click', (e) => onLegendItemClicked(e.target));

    let marker = document.createElement('div');
    marker.className = 'legend-item-marker';
    let markerColor = document.querySelector('.' + toAttr(group)).parentElement.style.color;
    marker.style.backgroundColor = markerColor;

    let label = document.createElement('label');
    label.htmlFor = toAttr(group);
    label.innerHTML = group;

    legendItem.appendChild(checkbox);
    legendItem.appendChild(marker);
    legendItem.appendChild(label);

    return legendItem;
}

/** Handles table item click. */
function onTableItemClicked(company) {
    title = document.querySelector('.modal-title');
    title.style.color = company.Cor;
    title.innerHTML = company.Nome;

    let group = document.querySelector('.modal-group');
    group.style.color = company.Cor;
    group.innerHTML = company.Grupo;

    document.querySelector('.modal-description').innerHTML = company.Descricao;
    document.querySelector('.modal').style.display = 'flex';
}

/** Handles legend item click. */
function onLegendItemClicked(legendItem) {
    let tableItems = document.getElementsByClassName(legendItem.id);

    if (legendItem.checked) {
        legendItem.parentElement.classList.add('selected');
        for (const item of tableItems) {
            item.classList.add('highlight');
        }
    } else {
        legendItem.parentElement.classList.remove('selected');
        for (const item of tableItems) {
            item.classList.remove('highlight');
        }
    }
}

/** Renders HTML elements created by given function inside a root element. */
function render(iterable, rootElementId, createHTMLElement) {
    const rootElement = document.getElementById(rootElementId);
    rootElement.innerHTML = '';
    for (const item of iterable) {
        rootElement.appendChild(createHTMLElement(item));
    }
}

/** Returns string formatted as attribute (with dashes and lowercase). */
function toAttr(string) {
    return string.replaceAll(' ', '-').toLowerCase();
}

/** Sets event listeners for closing modal. */
function setEventListeners() {
    window.addEventListener('click', (e) => closeModal(e));
    document.addEventListener('keydown', (e) => closeModal(e));
}

function closeModal(e) {
    const target = e.target.className;
    if (target === 'modal' || target === 'modal-close' || e.key === 'Escape') {
        document.querySelector('.modal').style.display = 'none';
    }
}

async function getData() {
    const response = await fetch('https://gist.githubusercontent.com/pablocarracci/cff82b235defc7a86665b7eabff25fda/raw/5524f97db4b36f9c5cfbb6e7b8b043d659424415/empresas.json');
    const data = await response.json();
    return data.Empresas;
}

main();
