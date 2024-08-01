function carregar() {
    var msg = window.document.getElementById('imsg')
    var foto = window.document.querySelector('img#ifoto')

    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} Horas`

    if (hora >= 0 && hora < 12){
        //BOM DIA
        foto.src = 'manha.jpg'
        //esse foto.src é a VARIÁVEL
        document.body.style.background = '#a07d1f'
    }else if (hora >=12 && hora < 18 ){
        //BOA TARDE
        foto.src = 'tarde.jpg'
        document.body.style.background = '#c04b3c'
    }else{
        //BOA NOITE
        foto.src = 'noite.jpg'
       document.body.style.background = '#2f2f4b'
    }
}
