function calculadora(valor1, pagamento){

    let resultado

    if(pagamento == '1'){
        const desconto = (valor1 * 8) / 100
        resultado = valor1 - desconto
    

    }else if(pagamento == '2'){
        const desconto = (valor1 * 4) / 100
        resultado = valor1 - desconto
        

    }else if(pagamento == '3'){
        const parcela = valor1 / 2
        resultado = parcela

    }else if(pagamento == '4'){
        const acrescido = (valor1 * 8) / 100
        resultadototal = Number(valor1) + Number(acrescido)
        resultado = resultadototal / 4
        
    }else{
        console.log('valor invalido')
    }

    return resultado

    entradaDeDados.close()
}

module.exports = {
    calculadora
}
