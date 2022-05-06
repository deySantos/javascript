var num =[8,4,6,9,7]
console.log(num)
num.push(3)
console.log(`Nosso vetor tem ${num.length} posições`)
// ele tem seis posições pois o valor [3] foi colocado depois (num.push(3))
console.log(`eles estão em ordem crescente ${num.sort()}`)
console.log(`Posição do primeiro valor é ${num[0]}`)
var pos = num.indexOf(6)
if(pos == -1){
    console.log('Esse valor não foi encontrado!')
} else {
    console.log(`O valor esta na posição ${pos}`)
}
