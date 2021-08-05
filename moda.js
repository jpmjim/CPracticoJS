//Moda
//=========
const lista1 = [
  1,
  2,
  3,
  1,
  2,
  3,
  4,
  2,
  2,
  2,
  1,
];

const lista1Count = {};

lista1.map(
  function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  }
);

//Volver a convertirlo en un array, dentro el cual hay arrays
//nuestro array de arrays ordenado
const lista1Array = Object.entries(lista1Count).sort(
  function(valorAcumulado, nuevoValor){
    return valorAcumulado[1] - nuevoValor[1];
  }
);

const moda = lista1Array[lista1Array.length - 1];

