//Reusamos la funcion de medio aritmetica
function calcularMediaAritmetica(lista){
  const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento){
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
// Calcular Mediana
//====================
const lista1 = [
  100,
  200,
  500,
  //800, //ver si el numeros de elementos es impar
  400000000,
];

//parseInt convierte numeros decimales en enteros.
const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
  if (numerito % 2 === 0){
    return true;
  } else {
    return false;
  }
};

let mediana;

if (esPar(lista1.length)){
  const elemento1 = lista1[mitadLista1 - 1]; 
  const elemento2 = lista1[mitadLista1];

  const promedioElemento1y2 = calcularMediaAritmetica([
    elemento1, 
    elemento2,
  ]);

  mediana = promedioElemento1y2;
} else {
  mediana = lista1[mitadLista1];
}

//Retos cambair el codigo
//==========================
//1--> crear una funcion, que no sea una lista estatica nombre(calcularMediana)
//2--> nuestra lista tiene que estar ordenada, se puede usar ciclo "for", obligado usar el metodo ".sort" de los arrays.