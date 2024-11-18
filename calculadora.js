function ParPositivo (numero){

    return numero >= 0 && numero % 2 === 0; 
}
const numero = prompt("ingrese su número");

const numeroConvertido = Number(numero);

console.log(ParPositivo(numeroConvertido));