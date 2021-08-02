//Porcentajes y Descuentos
//================
const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento =  (precioOriginal * porcentajePrecioConDescuento) / 100;

//console.log("El precio orginal es: " + precioOriginal);
console.log({ // imprimir valor de todas las variables en un solo console.log
  precioOriginal,
  descuento,
  porcentajePrecioConDescuento,
  precioConDescuento,
});