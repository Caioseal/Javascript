let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let resultado = document.querySelector('div#resultado')
let valores = []
num.focus() //Foco no objeto que você deseja

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        //Função para saber se o número está entre 1 e 100
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
        //O comando busca o número digitado na lista. Se não encontrado, retorna -1
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { 
        // Se não estiver na lista. Há um '!' antes da função indicando o NÃO
        valores.push(Number(num.value)) //Add elemento em um vetor. Nesse momento está dentro da lista, porém, precisa tornar visual
        let item = document.createElement('option') //Add elemento no selection. Cria uma tag 'option'
        item.text = `Valor ${num.value} adicionado` //Comando para adicionar o texto
        lista.appendChild(item) //Visualmente aparece que foi adicionado na lista
        resultado.innerHTML = '' //Limpa o resultado, caso insira mais números depois
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' //Dando certo ou dando errado, limpa os dados inseridos
    num.focus() //Foca na caixa de inserção de valores
}

function finalizar() {
    if (valores.length == 0) { //Se não digitar nenhum valor, erro
        window.alert('Adicione valores antes de calcular')
    } else {
        let total = valores.length //Saber o total de números na lista
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let posição in valores) {
            soma += valores[posição] //Comando de repetição para somar os valores.
            if (valores[posição] > maior) //Saber o maior e menor
                maior = valores[posição]
            if (valores[posição] < menor)
                menor = valores[posição]
        }

        media = soma/total
        resultado.innerHTML = ''
        resultado.innerHTML += `<p> Há ${total} números cadastrados.</p>`
        resultado.innerHTML += `<p> O maior valor é o ${maior}.</p>`
        resultado.innerHTML += `<p> O menor valor é o ${menor}.</p>`
        resultado.innerHTML += `<p> A soma dos valores é ${soma}.</p>`
        resultado.innerHTML += `<p> A média dos valores é ${media}</p>`
    }
}