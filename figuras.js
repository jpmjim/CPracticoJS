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
//Altura
function alturaTriangulo (lado1, lado2, base){
  return Math.sqrt((base/2) ** 2 + lado1 * lado2 );
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

//Creamos las funciones para los botones Calcular y Perímetro "Cuadrado"
//=======================================================================
function calcularPerimetroCuadrado(){
  const input = document.getElementById("square__input");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado(){
  const input = document.getElementById("square__input");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//Creamos las funciones para los botones Calcular y Perímetro "Triángulo"
//=======================================================================
function calcularPerimetroTriangulo(){
  const inputside1 = document.getElementById("triangle__input--side1");
  const value1 = Number(inputside1.value);
  const inputside2 = document.getElementById("triangle__input--side2");
  const value2 = Number (inputside2.value);
  const inputbase = document.getElementById("triangle__input--base");
  const value3 = Number(inputbase.value);
  const perimetro = perimetroTriangulo(value1,value2,value3);
  alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo(){
  const input1 = document.getElementById("triangle__input--side1");
  const value1 = Number(input1.value);
  const input2 = document.getElementById("triangle__input--side2");
  const value2 = Number (input2.value);
  const input3 = document.getElementById("triangle__input--base");
  const value3 = Number(input3.value);
  const altura = alturaTriangulo(value1, value2, value3);
  const area = areaTriangulo(value3, altura);
  alert("La altura del triangulo es: " + altura + " El area del triangulo es: " + area);
}

//Creamos las funciones para los botones Calcular y Perímetro "Triángulo"
//=======================================================================
function calcularDiametroCirculo(){
  const input = document.getElementById("circle__radius");
  const value = input.value;
  const diametro = diametroCirculo(value);
  alert ("El diámetro del circulo es: " + diametro);
}
function calcularPerimetroCirculo(){
  const input = document.getElementById("circle__radius");
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  alert("El perimetro del circulo es: " + perimetro);
}
function calcularAreaCirculo(){
  const input = document.getElementById("circle__radius");
  const value = input.value;
  const area = areatroCirculo(value);
  alert("El área del circulo es: " + area);
}