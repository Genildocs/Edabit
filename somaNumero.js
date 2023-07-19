const addUp = (number)=>{
    sum = 0
    if(number > 0){

        for (let x = 0; x <= number; x ++) sum += x

    }


    return sum
}

console.log(addUp(4))
console.log(addUp(13))
console.log(addUp(600))