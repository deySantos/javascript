var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else { 
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n))!= -1 ){
        return true
    } else {
        return false 
    }
}

function Adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
      valores.push(Number(num.value))
      let item = document.createElement('option')
      item.text = ` valor ${num.value} adicionado`
      lista.appendChild(item)
      res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já encontrado na Lista.')
    }

    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de Finalizar!')
    } else {
        var tot = valores.length
        var maior = valores [0]
        var menor = valores [0]
        var soma = 0
        var media = 0 
        for( var pos in valores) {
            soma += valores[pos]
            if(valores [pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]    
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        res.innerHTML +=`A soma dos valores foi ${soma}`
        res.innerHTML += `<p>a média dos valores digitados é </p>${media}`
    }
}