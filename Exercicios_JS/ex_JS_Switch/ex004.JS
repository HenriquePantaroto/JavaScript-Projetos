var agora = new Date()
var diaSem = agora.getDay()
var diaSema = 7

switch(diaSem) {
    case 0:
        console.log('Hoje é Domingo!')
        break
    case 1:
        console.log('Hoje é Segunda-Feira!')
        break
    case 2:
        console.log('Hoje é Terça-Feira!')
        break
    case 3:
        console.log('Hoje é Quarta-Feira!')
        break 
    case 4:
        console.log('Hoje é Quinta-Feira!')
        break
    case 5:
        console.log('Hoje é Sexta-Feira!')
        break 
    case 6:
        console.log('Hoje é Sábado!')
        break  
    default:
        console.log('[ERRO] Dia inválido!')
        break
}


/* Segunda opção, tradicional com Condições aninhadas. */

/*if (diaSem == 0) {
    console.log('Hoje é Domingo!')
}
else if (diaSem == 1) {
    console.log('Hoje é Segunda-Feira!')
}
else if (diaSem == 2) {
    console.log('Hoje é Terça-Feira!')
}
else if (diaSem == 3) {
    console.log('Hoje é Quarta-Feira!')
}
else if (diaSem == 4) {
    console.log('Hoje é Quinta-Feira!')
}
else if (diaSem == 5) {
    console.log('Hoje é Sexta-Feira!')
}
else if (diaSem == 6) {
    console.log('Hoje é Sábado!')
}*/
