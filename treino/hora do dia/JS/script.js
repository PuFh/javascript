function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')

    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas`

    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'manha.jpg'
    }else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'ma'
    }else{
        //BOA NOITE
        img.src = 'noite.jpg'
    }
}
