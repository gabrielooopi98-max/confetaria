const cardsCardapio = document.querySelector('.cards-cardapio');

// FUNÇÃO FORMATAR PREÇO PARA TROCAR O '.' POR ','

function formatarPreco(preco) {
  if(!preco || preco === 0) return "-";
  return `R$ ${preco.toFixed(2).replace(".", ",")}`;
}

// FUNÇÃO PARA CRIAR OS CARDS DOS BOLOS NO CARDAPIO

function criarCard(bolo) {
  const card = document.createElement('article');
  card.className = 'card-cardapio';
  card.innerHTML = `
  <h4>${bolo.nome}</h4>
  <div class="area-descricao"> <p>${bolo.descricao}</p> </div>
  <div class="area-preco" <span>${formatarPreco(bolo.preco)}</span> </div>   
  <p class="area-categoria">${bolo.categoria}</p>
  `;
  return card;
}

//FUNÇÃO PARA RENDERIZAR OS CARDS QUANDO A CATEGORIA ESCOLHIDA SER ATIVA

function renderizarCards(categoria) {
  const lista = categoria
  ? bolos.filter(b => (b.categoria || '').toLowerCase() === (categoria || '').toLowerCase())
  : bolos;

  cardsCardapio.innerHTML = '';
  if(lista.length === 0) {
    cardsCardapio.innerHTML = '<p>Nenhum Item Nesta Categoria</p>';
    return;
  }
  lista.forEach(bolo => cardsCardapio.appendChild(criarCard(bolo)));
}

//CODIGO PARA FUNCIONAR AS TABS DO CARDAPIO

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');
    renderizarCards(tab.dataset.cat);
  });
});

//ATIVAR A TAB CATEGORIA QUE FOI ESCOLHIDA

const tabAtivo = document.querySelector('.tab.active');
renderizarCards(tabAtivo ? tabAtivo.dataset.cat : null);