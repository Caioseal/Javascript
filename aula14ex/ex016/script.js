function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    //let res = document.getElementById("res")

    /*A variável criada com 'let' fica disponível somente dentro da função
    Deve-se coletar os dados digitados pelo usuário e depois converte-los em Number*/
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
        //Se algum dos dados for igual a zero, ou seja, se o usuário não digitar, irá informar um erro
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //Criando uma nova variável para transformar os dados digitados em número.
        if (p <= 0) { //Se o passo for igual a zero, considerar como 1
            window.alert('Passo inválido! Considerando passo como 1')
            p = 1
        }

        if (i < f) { //Se o número inicial for MENOR que o final, a contagem é crescente
            for (let contador = i; contador <= f; contador += p) {
                res.innerHTML += `${contador} \u{1F449}` //emoji code universal
            }
        } else { //Se o número inicial for MAIOR que o final, a contagem é decrescente
            for (let contador = i; contador >= f; contador -= p) {
                res.innerHTML += `${contador} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}