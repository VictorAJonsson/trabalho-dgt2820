let numeros = [];

const campoNumero = document.getElementById("numero");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaNumeros = document.getElementById("listaNumeros");
const btnMisturar = document.getElementById("btnMisturar");
const btnOrdenar = document.getElementById("btnOrdenar");

function atualizarLista() {
  listaNumeros.textContent = numeros.join(", ");
}

function embaralhar() {
  for (let i = numeros.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
  }
}

function bubbleSort() {
  const lista = [...numeros];

  for (let i = 0; i < lista.length - 1; i++) {
    for (let j = 0; j < lista.length - 1 - i; j++) {
      if (lista[j] > lista[j + 1]) {
        [lista[j], lista[j + 1]] = [lista[j + 1], lista[j]];
      }
    }
  }

  return lista;
}

function selectionSort() {
  const lista = [...numeros];

  for (let i = 0; i < lista.length - 1; i++) {
    let indiceMenor = i;

    for (let j = i + 1; j < lista.length; j++) {
      if (lista[j] < lista[indiceMenor]) {
        indiceMenor = j;
      }
    }

    [lista[i], lista[indiceMenor]] = [lista[indiceMenor], lista[i]];
  }

  return lista;
}

function quickSort(lista) {
  if (lista.length <= 1) {
    return lista;
  }

  const pivo = lista[Math.floor(lista.length / 2)];

  const menores = [];
  const iguais = [];
  const maiores = [];

  for (const numero of lista) {
    if (numero < pivo) {
      menores.push(numero);
    } else if (numero > pivo) {
      maiores.push(numero);
    } else {
      iguais.push(numero);
    }
  }

  return [...quickSort(menores), ...iguais, ...quickSort(maiores)];
}

btnAdicionar.addEventListener("click", () => {
  if (campoNumero.value === "") {
    return;
  }

  const numero = Number(campoNumero.value);

  numeros.push(numero);

  atualizarLista();

  campoNumero.value = "";
  campoNumero.focus();
});

btnMisturar.addEventListener("click", () => {
  embaralhar();
  atualizarLista();
});

btnOrdenar.addEventListener("click", () => {
  const algoritmoSelecionado = document.querySelector(
    'input[name="algoritmo"]:checked',
  );

  if (!algoritmoSelecionado) {
    return;
  }

  const algoritmo = algoritmoSelecionado.value;

  if (algoritmo === "bubble") {
    numeros = bubbleSort();
  }

  if (algoritmo === "selection") {
    numeros = selectionSort();
  }

  if (algoritmo === "quick") {
    numeros = quickSort(numeros);
  }

  atualizarLista();
});
