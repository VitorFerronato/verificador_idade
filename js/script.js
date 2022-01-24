function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
    alert('[ERRO] Verifique os dados e tente novamente!')

    } else {
        var fsex =document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // Vai criar uma tag no js
        img.setAttribute('id','foto') // Vai criar um Id chamado "foto" para a tag img criada
        
        if (fsex[0].checked){
           genero = 'Homem'
           if (idade >= 0 && idade < 10){
               //Criança
               img.setAttribute('src','./js/criancahomem.png')
           } else if (idade < 21) {
               //Jovem
               img.setAttribute('src','./js/jovemhomem.png')
           } else if (idade < 50){
               //Adulto
               img.setAttribute('src','./js/adultohomem.png')
           } else{
               //Idoso
               img.setAttribute('src','./js/idosohomem.png')
           }
        
        } else if (fsex[1].checked){
           genero = 'Mulher'
           if (idade >= 0 && idade < 10){
              //Criança
              img.setAttribute('src','./js/criancamulher.png')
           }else if (idade < 21) {
              //Jovem
              img.setAttribute('src','./js/jovemmulher.png')
           } else if (idade < 50){
              //Adulto
              img.setAttribute('src','./js/adultomulher.png')
           } else{
              //Idoso
              img.setAttribute('src','./js/idosomulher.png')
           }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
    }
}