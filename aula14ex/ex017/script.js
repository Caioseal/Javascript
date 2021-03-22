function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    //Coloca em uma variável o número digitado pelo usuário e a caixa de seleção
    if (num.value.length == 0) { //Se não digitar um número, sistema notifica um erro.
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(num.value) //converter texto digitado para número
        let contador = 1
        tab.innerHTML = '' //Sempre que for começar uma nova tabuada, vai limpar o texto anterior.
        while (contador <= 10) {
            let item = document.createElement('option') //Cria uma opção dentro da caixa de seleção
            item.text = `${n} x ${contador} = ${n*contador}` //Add texto ao item dentro da caixa de seleção
            item.value = `tab${contador}` //Útil quando é preciso enviar o formulário
            tab.appendChild(item) //Inserir o item como um Child dentro da caixa de seleção
            contador ++
        }
    }
}