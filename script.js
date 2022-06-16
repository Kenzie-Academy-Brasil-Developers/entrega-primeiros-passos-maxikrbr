const preçoRefrigerante = 11.99
const preçoMacarrao = 6.99
const preçoErvilha = 6.99
const preçoArroz = 22.99
const preçoFeijão = 11.89
const preçoVinho = 70.00

let totalRefri = preçoRefrigerante * 3
let totalMacarrao = preçoMacarrao * 4
let totalErvilha = preçoErvilha * 3
let totalArroz = preçoArroz * 3
let totalFeijão = preçoFeijão * 2
let totalVinho = preçoVinho * 3

total = totalRefri + totalMacarrao + totalErvilha + totalArroz + totalFeijão + totalVinho
roundTotal = Math.round(total)

metade = roundTotal / 2
metadeSemVinho = (roundTotal - totalVinho) / 2
metadeComVinho = metadeSemVinho + totalVinho

let voce = 0
let amigo = 0

if (roundTotal % 2 == 0) {
    let voce = metadeSemVinho;
    let amigo = metadeSemVinho + totalVinho;
    console.log(`O valor total da compra é ${roundTotal}. Você deve pagar ${voce} e seu amigo deve pagar ${amigo}`)
}
else {
    let voce = metade;
    let amigo = metade;
    console.log(`O valor total da compra é ${roundTotal}. Você deve pagar ${voce} e seu amigo deve pagar ${amigo}`)
}