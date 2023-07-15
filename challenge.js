const ponto = ()=> console.log('----------------------------------------------------------------')
/*Retorna true se for vespera de natal, caso contrario false*/
/*function timeForMilkAndCookies(date) {
 return date
}
console.log(timeForMilkAndCookies(new Date(2013,11,24)))*/


ponto()

/*Retorna o numero maximo e o minimo dentro de um array*/

function minMax(arr) {
    const minMax = [Math.min(...arr), Math.max(...arr)]
    return minMax
}

console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([2334454, 5]))
console.log(minMax([1]))

ponto()

const frase = "red flag blue flag";
const frase2 = "yellow flag red flag blue flag green flag"
const frase3 = "pink flag red flag black flag blue flag green flag red flag "
const regExp = /red flag|blue flag/ig
console.log(frase.match(regExp))
console.log(frase2.match(regExp))
console.log(frase3.match(regExp))

ponto()

/*Crie uma função que retorne o número de true valores existentes em uma matriz.*/

function countTrue(arr){
    /*const result = arr.filter((item)=>{
        return item === true
    })*/

    const result = arr.filter((item)=>{
        return item === true
    })

    return result.length 
}

console.log(countTrue([true, false, false, true, false]))
console.log(countTrue([false, false, false, false]))
console.log(countTrue([]))

ponto()
/*Verificar de qual geração é a partir de um numero e sexo*/ 

function generation(number, sexo){
    const generations = {
            '-3': {'m': 'great grandfather', 'f': 'great grandmother'},
            '-2': {'m': 'grandfather', 'f': 'grandmother'},
            '-1': {'m': 'father', 'f': 'mother'},
            '0': {'m':'me!','f':'me!'},
            '1': {'m': 'son', 'f':'daughter' },
            '2': {'m':'grandson','f': 'granddaughter'},
            '3': {'m':'great grandson','f':'great granddaughter'},
        }
        if (sexo === 'm'){
            return generations[number]['m']
        }else{
            return generations[number]['f']
        }
}

console.log(generation(0, "f"))
console.log(generation(-3, "m"))
console.log(generation(1, "f"))

ponto()

// Verificar a quantidade de numeros inteiros contidos em um numeros 

function num_of_digits(number){
    const regExp = /\d/g
}

// console.log(num_of_digits(1000))

const number = 1000
const regExp2 = /\d+/g
console.log(number.match(regExp2))



















