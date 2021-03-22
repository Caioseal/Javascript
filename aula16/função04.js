function fatorial(numero) {
    let fatorial = 1
    for (let contador = numero; contador > 1; contador --) { 
        fatorial *= contador
    }
    return fatorial
}
//O contador começa valendo 'número' e será subtraido de 1 em 1 até chegar em 1.
//Ou seja, 5! = 5 x 4 x 3 x 2 x 1 = 120
console.log(fatorial(5))