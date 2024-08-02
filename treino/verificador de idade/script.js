function resultado(){
    //Dados Externos
    var data = new Date();
    var ano = data.getFullYear();

    /*Dados dos INPUTS*/
    var nasc = window.document.querySelector('input#nasc');
    var man = window.document.querySelector('input#masculino')
    var woman = window.document.querySelector('input#feminino')

    var man = 'Homem'

    /*Variavel para mostrar a saida dos outras variáveis(Inputs)*/
    var saida = window.document.querySelector('div#saida');


    if (nasc.value == 0 || nasc.value > ano){
        window.alert('[ERRO] Verifique os dados abaixo')
    }else{
        var nasc = Number(nasc.value)
        var radsex = window.document.getElementsByName('genero')
        var idade = ano - nasc
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
    
        if (radsex[0].checked) {
            var genero = 'Homem'
            if (idade >=0 && idade <= 15){
                //Criança
                foto.src = 'kid-man'
            }else if(idade > 15 && idade <=30){
                //Jovem

            }else if(idade > 30 && idade <= 60){
                //Senhor de meia idade
            }else{
                //idoso
            }

        }else if(radsex[1].checked){
            var genero = 'Mulher'
            if (idade >=0 && idade <= 15){
                //Criança
                foto.src = 'kid-man'
            }else if(idade > 15 && idade <=30){
                //Jovem

            }else if(idade > 30 && idade <= 60){
                //Senhor de meia idade
            }else{
                //idoso
            }
        }

        saida.innerHTML = `Você tem ${idade} e é ${genero}`
    }
}