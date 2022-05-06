var num = [2,6,4,9,3,7]

//console.log(num)

/*console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])*/

/* for(var pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos}, tem o valor ${num[pos]}`)
} */

for(var pos in num){
    console.log(`A posição ${pos}, tem o valor ${num[pos]}`)
} // essa forma é mas simplificada