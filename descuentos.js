//Porcentajes y Descuentos
//================
//Creación de las funciones
//===========================
function calculaPrecioConDescuento(precio, descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento =  (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

//Funcion conectar con HTML
function productPriceDiscount(){
  const inputPrice = document.getElementById("product__price");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("product__discount");
  const discountValue = inputDiscount.value;
  const priceWithDiscount = calculaPrecioConDescuento(priceValue, discountValue);

  //utilizando innertext que es un atributo
  const resultPrice = document.getElementById("ResultP");
  resultPrice.innerText = "El precio con descuento son: s/" + priceWithDiscount;
}