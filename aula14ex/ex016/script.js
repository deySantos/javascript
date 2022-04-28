function Contar() {
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var pas = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[erro] Falta Dados!')
    } else {
        res.innerHTML ='Contando... <br>' 
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        if ( p <= 0 ) {
            window.alert('Acesso Invalido! Considerando [PASSO 1]')
            p = 1
        }
        if ( 1 < f ) {
            for( var c = i; c <= f; c += p)
            res.innerHTML += `${c} \u{1F449}`
        }
        else {
            for( var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}