//console.log("Hello, world!");
//Cuadrado
//==========
//const == no cambia el valor de la varable
console.group("Cuadrado"); //Para agrupar console.los
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");
//Perímetro
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
//Área
const areaCuadrado = ladoCuadrado **2;
console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

//Triángulo
//===========
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
  "Los lados del triángulo miden: " 
  + ladoTriangulo1 
  + "cm, " + ladoTriangulo2 
  + "cm, " + baseTriangulo 
  + "cm"
);
//Altura
//const alturaTriangulo = Math.sqrt((baseTriangulo/2) ** 2 + ladoTriangulo1 ** 2); uso del teorema de pitagoras con la variable Math de javascript.
const alturaTriangulo = 5.5;
console.log("La altura del triángulo es: " + alturaTriangulo + "cm")
//Perímetro
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro triángulo es: " + perimetroTriangulo + "cm");
//Área
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triángulo es: " + areaTriangulo + "cm^2")
console.groupEnd();

//Círculo
//===========
console.group("Círculo");
//Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");
//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del circulo es: " + diametroCirculo + "cm");
//PI
//const PI = 3.1415; definir pi de forma manual
const PI = Math.PI; //definir con variable Math
console.log("PI es: " + PI);
//Perímetro
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");

//Área
const areaCirculo = radioCirculo ** 2 * PI;
console.log("El área del circulo es: " + areaCirculo + "cm^2");
console.groupEnd();