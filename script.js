function contar() {
    // pegar dados do inputs e div
    let ini = document.getElementById('txn1')
    let fim = document.getElementById('txn2')
    let passo = document.getElementById('txn3')
    let res = document.getElementById('res')
        // validação dos campos caso esteja vazio
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERROR] Campo vazio!')
    } else {
        res.innerHTML = 'Contando: <br>'
            // converter numero inteiro
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
            // if caso o usuario coloque 0
        if (p <= 0) {
            alert('Passo invalido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}` // cod. emogion
            }
        }
        res.innerHTML += `\u{1F3C1}` // cod. emogion
    }
}