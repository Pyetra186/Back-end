/********************************
 * Objetivo: Realizar um programa para vendas de uma loja
 * Data: 30/08/2023
 * Autor: Pietra
 * Versão: 1.0
*********************************/
var calculos = require('./modulo/calculos.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Insira o valor do item: ", function(valor1){
        var valorproduto = valor1.replace(',', '.')

        console.log('*****************************************')
        console.log('Formas de de Pagamento: ')
        console.log('1  | Á vista 8% de desconto')
        console.log('2  | Á vista no cartão 4% de desconto')
        console.log('3  | Em 2x o preço normal sem juros')
        console.log('4  | Em 4x preço acrescido de 8%')
        console.log('******************************************')

    entradaDeDados.question("Digite o número da forma de pagamento escolhida: ", function(pagamento){
        let pagamentos = pagamento

        resultado = calculos.calculadora(valor1, pagamento)

                if (resultado){
                console.log(valor1)
                console.log(resultado)
                }

                entradaDeDados.close()
 
    })
    
})
             

        
    