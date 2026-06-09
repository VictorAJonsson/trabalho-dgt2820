const receitas = [
  {
    titulo: "Lasanha",
    descricao: "Uma clássica lasanha italiana com molho e queijo.",
    imagem: "./imagens/lasanha.jpg",
    ingredientes: ["Massa", "Queijo", "Molho de tomate"],
  },

  {
    titulo: "Bolo de Chocolate",
    descricao: "Bolo fofinho com cobertura de chocolate.",
    imagem: "./imagens/bolo-chocolate.jpg",
    ingredientes: ["Farinha", "Chocolate", "Leite"],
  },

  {
    titulo: "Pizza",
    descricao: "Pizza tradicional com queijo e calabresa.",
    imagem: "./imagens/pizza.jpg",
    ingredientes: ["Massa", "Queijo", "Calabresa"],
  },
];

const receitasContainer = document.getElementById("receitas");

const modal = document.getElementById("modalReceita");
const modalTitulo = document.getElementById("modalTitulo");
const modalDescricao = document.getElementById("modalDescricao");
const modalImagem = document.getElementById("modalImagem");
const modalIngredientes = document.getElementById("modalIngredientes");
const btnFechar = document.getElementById("btnFechar");

function renderizarReceitas() {
  receitas.forEach((receita, index) => {
    receitasContainer.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100 receita-card">

          <img
            src="${receita.imagem}"
            class="card-img-top"
            alt="${receita.titulo}"
          />

          <div class="card-body d-flex flex-column">

            <h5 class="card-title">
              ${receita.titulo}
            </h5>

            <p class="card-text text-muted">
              ${receita.descricao}
            </p>

            <div class="mb-3">
              ${receita.ingredientes
                .map(
                  (ingrediente) =>
                    `<span class="ingrediente-tag">${ingrediente}</span>`,
                )
                .join("")}
            </div>

            <button
              class="btn btn-dark mt-auto btn-ver-receita"
              data-index="${index}"
            >
              Ver Receita
            </button>

          </div>

        </div>
      </div>
    `;
  });
}

function abrirModal(indice) {
  const receita = receitas[indice];

  modalTitulo.textContent = receita.titulo;
  modalDescricao.textContent = receita.descricao;
  modalImagem.src = receita.imagem;

  modalIngredientes.innerHTML = receita.ingredientes
    .map((ingrediente) => `<li>${ingrediente}</li>`)
    .join("");

  modal.style.display = "flex";
}

function fecharModal() {
  modal.style.display = "none";
}

renderizarReceitas();

document.addEventListener("click", (event) => {
  const botao = event.target.closest(".btn-ver-receita");

  if (!botao) {
    return;
  }

  abrirModal(Number(botao.dataset.index));
});

btnFechar.addEventListener("click", fecharModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    fecharModal();
  }
});
