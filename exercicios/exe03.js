const notaUm = 4.5
const notaDois = 6.9
const notaTres = 9

let totalMedia = 0.0
totalMedia = (notaUm + notaDois + notaTres) / 3
console.log(totalMedia)

if (totalMedia > 7) {
    console.log('Aprovado')
} else if (totalMedia < 4) {
    console.log('Reprovado')
} else {
    console.log('Vai pra recuperação')
}