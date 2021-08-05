function calcularMediaAritmetica(lista){
  //Cuando trabajemos con array no solo podemos utilizar el ciclo for para iterar, tambien existen metodos.
  // let sumaLista = 0;
  // for (let i = 0; i < lista.length; i++) {
  //   sumaLista = sumaLista + lista[i];
  // }

  //Metodos
  //=========
  //Reduce, va recibir una funcion que debemos enviar como argumento, el cula no permite sumar cadomo uno de los elemtos.
  const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento){
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}