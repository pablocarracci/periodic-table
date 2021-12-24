/**
 * Returns a string formatted as attribute (lowercase with dashes).
 * @param {string} str String to be formatted.
 */
export function toAttr(str) {
  return str.replaceAll(' ', '-').toLowerCase();
}

/** Returns a list of companies. */
export async function getCompanies() {
  const response = await fetch('https://gist.githubusercontent.com/pablocarracci/cff82b235defc7a86665b7eabff25fda/raw/5524f97db4b36f9c5cfbb6e7b8b043d659424415/empresas.json');
  const data = await response.json();
  return data.Empresas;
}
