/*Crie uma função que receba um array de números e retorne "Boom!"se o dígito 7 aparecer no array.
Caso contrário, retorne "there is no 7 in the array".*/


function sevenBoom(arr){
    const regex = /7/
    const result = regex.test(arr) ? "Boom!" : "there is no 7 in the array"
    return result
}
console.log(sevenBoom([1, 2, 3, 4, 5, 6,7]))
console.log(sevenBoom([8, 6, 33, 100]))
console.log(sevenBoom([2, 55, 60, 97, 86]))

/*
let arr = ["Ang", "Katara", "Toph", 73, 25, 7, 17]

let x = arr.find((item)=>{
     return item === 73
} )
console.log(x)
const regex = /7/
let b = arr.filter((item, index)=>{
    return regex.test(item)
})
*/
