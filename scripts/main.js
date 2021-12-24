import { render } from "./render.mjs";
import { createTableItem, createLegendItem } from "./items.mjs";
import { getCompanies } from "./utils.mjs";
import { setModalListeners } from "./modal.mjs";

async function main() {
    const companies = await getCompanies();
    renderTable(companies);

    const groups = [...new Set(companies.map(c => c.Grupo))];
    renderLegend(groups);

    setModalListeners();
}

const renderTable = companies => render(companies, 'table-inner', createTableItem);
const renderLegend = groups => render(groups, 'legend-inner', createLegendItem);

main();
