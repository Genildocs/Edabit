/*Escreva uma função que crie um objeto com cada par (chave, valor)
sendo as versões (minúsculas, maiúsculas) de uma letra, respectivamente.*/

function mapping(arr){
 const obj = {}
 for(let x = 0; x < arr.length; x ++){
     const str = arr[x]
     if(obj[str]){
         obj[str] ++
     }else {
         obj[str] = str.toUpperCase()
     }
 }

 return obj

}


console.log(mapping(["p", "s"]) )
console.log(mapping(["a", "b", "c"]))
console.log(mapping(["a", "v", "y", "z"]))