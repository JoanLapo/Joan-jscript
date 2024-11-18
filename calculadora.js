function Rango (min, max, numero) {

    return numero >= min && numero <= max
}
const min = parseInt (prompt ("Dime min"))
const max = parseInt (prompt ("Dime max"))
const numero = parseInt (prompt ("Dime numero")) 

if (numero >= min && numero <= max)
    console.log ("Está en el rango")
else (console.log ("No está en el rango"))