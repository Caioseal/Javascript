let num = [5, 8, 2, 9, 3]
num.sort()
console.log(num)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
