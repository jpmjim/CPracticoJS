//Encapsulando código en funciones
//================================== cuando recibimos dentro de una funcion se llaman parámetros, pero cuando llamamos una función lo que enviamos ahora son argumentos.
//Cuadrado
//=======================
//const == no cambia el valor de la varable
console.group("Cuadrado"); //Para agrupar console.logs
//Perímetro
function perimetroCuadrado(lado){
  return lado * 4;
};
//Área
function areaCuadrado(lado){
  return lado ** 2;
};
console.groupEnd();

//Triángulo
//========================
//Perímetro
console.group("Triángulo")
function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
}
//Área
function areaTriangulo(base, altura){
  return (base * altura) / 2;
}
console.groupEnd();

//Círculo
//======================
console.group("Círculo")
//Diámetro
function diametroCirculo(radio){
  return radio * 2;
}
//PI
//const PI = 3.1415; definir pi de forma manual
const PI = Math.PI; //definir con variable Math
console.log("PI es: " + PI);
//Perímetro
function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
//Área
function areatroCirculo(radio){
  return radio ** 2 * PI;
}
console.groupEnd();