/** Opens modal displaying info from a given company. */
export function openModal(company) {
  const title = document.querySelector('.modal-title');
  title.style.color = company.Cor;
  title.innerHTML = company.Nome;

  const group = document.querySelector('.modal-group');
  group.style.color = company.Cor;
  group.innerHTML = company.Grupo;

  document.querySelector('.modal-description').innerHTML = company.Descricao;
  document.querySelector('.modal').style.display = 'flex';
}

/** Sets event listeners for closing modal. */
export function setModalListeners() {
  window.addEventListener('click', (e) => closeModal(e));
  document.addEventListener('keydown', (e) => closeModal(e));
}

function closeModal(e) {
  const target = e.target.className;
  if (target === 'modal' || target === 'modal-close' || e.key === 'Escape') {
    document.querySelector('.modal').style.display = 'none';
  }
}
