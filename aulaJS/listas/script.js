let listaDecompras = [];
let categorias = [
  "Limpeza", "Grãos", "Proteínas", "Temperos Secos",
  "Temperos Verdes", "Legumes", "Laticínios", "Complementos de Cozimento", "Outros"
];

const formAdicionar = document.getElementById("formAdicionar");
const formRemover = document.getElementById("formRemover");
const formCategoria = document.getElementById("formCategoria");
const inputItem = document.getElementById("novoItem");
const inputQtd = document.getElementById("quantidade");
const selectCat = document.getElementById("categoria");
const selectRemCat = document.getElementById("removerCategoria");
const inputRemPos = document.getElementById("removerPosicao");
const btnBaixar = document.getElementById("baixar");
const inputNovaCat = document.getElementById("novaCategoria");
const btnAddCat = document.getElementById("adicionarCategoria");
const btnRemCat = document.getElementById("removerCategoriaBtn");
const listasDiv = document.getElementById("listas");

// Atualiza selects e listas
function atualizarCategorias() {
  selectCat.innerHTML = "";
  selectRemCat.innerHTML = "";
  listasDiv.innerHTML = "";

  categorias.forEach(cat => {
    const opt1 = document.createElement("option");
    opt1.value = cat;
    opt1.textContent = cat;
    selectCat.appendChild(opt1);

    const opt2 = document.createElement("option");
    opt2.value = cat;
    opt2.textContent = cat;
    selectRemCat.appendChild(opt2);

    const h2 = document.createElement("h2");
    h2.textContent = cat;
    const ul = document.createElement("ul");
    ul.id = cat;
    listasDiv.appendChild(h2);
    listasDiv.appendChild(ul);
  });
}

function renderLista() {
  document.querySelectorAll("#listas ul").forEach(ul => ul.innerHTML = "");
  listaDecompras.forEach(obj => {
    const li = document.createElement("li");
    li.innerHTML = `${obj.nome} - Qtd: ${obj.quantidade} <span class="categoria">${obj.categoria}</span>`;
    document.getElementById(obj.categoria).appendChild(li);
  });
}

formAdicionar.addEventListener("submit", e => {
  e.preventDefault();
  const nome = inputItem.value.trim();
  const quantidade = parseInt(inputQtd.value);
  const categoria = selectCat.value;

  if (nome && quantidade > 0 && categoria) {
    listaDecompras.push({ nome, quantidade, categoria });
    renderLista();
    formAdicionar.reset();
  }
});

formRemover.addEventListener("submit", e => {
  e.preventDefault();
  const categoria = selectRemCat.value;
  const pos = parseInt(inputRemPos.value);

  if (categoria && pos > 0) {
    const itensCategoria = listaDecompras.filter(obj => obj.categoria === categoria);
    if (pos <= itensCategoria.length) {
      let contador = 0;
      for (let i = 0; i < listaDecompras.length; i++) {
        if (listaDecompras[i].categoria === categoria) {
          contador++;
          if (contador === pos) {
            listaDecompras.splice(i, 1);
            break;
          }
        }
      }
      renderLista();
      formRemover.reset();
    }
  }
});

btnAddCat.addEventListener("click", () => {
  const nova = inputNovaCat.value.trim();
  if (nova && !categorias.includes(nova)) {
    categorias.push(nova);
    atualizarCategorias();
    renderLista();
    inputNovaCat.value = "";
  }
});

btnRemCat.addEventListener("click", () => {
  const cat = inputNovaCat.value.trim();
  if (cat && categorias.includes(cat)) {
    categorias = categorias.filter(c => c !== cat);
    listaDecompras = listaDecompras.filter(obj => obj.categoria !== cat);
    atualizarCategorias();
