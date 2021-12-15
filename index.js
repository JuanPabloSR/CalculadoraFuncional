//Realizar una calculadora que permita suma, multiplica, dividir y restar pero solo usando las funciones suma y resto, es decir a partir de la suma y la resta se debe realizar la multiplicación y división. Se debe usar solo funciones y no se puede usar el paradigma orientado a objetos, también se puede desarrollar bajo cualquier lenguaje de programación.  


// calculadora Funcional en JS
console.log("*****CALCULADORA FUNCIONAL JAVASCRIPT*****")
//Suma con programacion funcional 
const suma = (num1, num2) => num1 + num2;
console.log("La suma es: " + suma(5,6))
console.log("**********")
//Resta con programacion funcional 
const resta = (num1, num2) => num1 - num2;
console.log("La resta es: " + resta(16,3))
console.log("**********")

//Multiplicacion con programacion funcional usando la funcion suma
const multiplicar = (num1, num2) => {
  return[...Array(num2)].reduce((cont) =>suma(cont, num1), 0);
}
console.log("La multiplicación es "+ multiplicar(20,5))
console.log("**********")

//Division con programacion funcional usando la funcion suma y Multiplicacion
const dividir = (num1, num2) => {
  return num2 == 0 || num1 == 0 ? 'No se puede dividir por 0' : num2 > 1 ? [...Array(num1).keys()].reduce((cont, num) => multiplicar(num, num2) <= num1 ? suma(cont, 1) : cont, -1) : num1;
}
console.log("la division es: " +dividir(20,5));
console.log("**********")
