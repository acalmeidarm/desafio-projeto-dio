/*Desafio:  Faça um programa para calcular o valor de uma viagem
Serão necessárias 03 variaveis:
    var 01 - preço do combustivel
    var 02 - gasto médio de combustivel do carro por KM
    var 03 - distância em KM da viagem
Imprima no console o valor que será gasto para realizar esta viagem
*/

let precoCombustivel = 5.09
let qtdKmLitro = 12;
let distancia = 1500;
let consumoCarro = distancia/qtdKmLitro;
let gastoTotal = consumoCarro * precoCombustivel;

console.log("Você precisará de: " + consumoCarro + " litros de combustivel")
console.log("O valor de combustivel gasto na viagem será de " + gastoTotal.toFixed(2) + " litros de combustivel")


