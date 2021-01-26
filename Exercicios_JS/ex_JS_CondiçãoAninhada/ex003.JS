var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()

console.log(`Agora são exatamente ${hora}:${minuto} hora(s).`)
if (hora >= 6 && hora <= 11.59) {
    console.log('Bom dia!')
}
else if (hora >= 12 && hora <= 17.59) {
    console.log('Boa tarde!')
}
else if (hora >= 18 && hora <= 23.59) {
    console.log('Boa noite!')
}
else {
    console.log('Boa madrugada!')
}