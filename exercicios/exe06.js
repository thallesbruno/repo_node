let arr = [];

for (let index = 0; index <= 10; index++) {
    arr.push(index)
}

console.log(arr)

console.log('Complementando...')

for (const e in arr) {
    console.log(`Valor percorrido: ${e}`)
}