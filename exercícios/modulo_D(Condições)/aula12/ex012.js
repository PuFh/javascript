console.log('Bem vindo a programa de horários')
var hora_sistema = new Date()
var hora = hora_sistema.getHours()
console.log(`Agora são ${hora} Horas`)

if (hora >= 6 && hora <= 12){
    console.log('Bom-dia')
}else if (hora >= 13 && hora < 18) {
    console.log('Boa tarde')
}else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite')
}else {
    console.log('Boa Madrugada')
}