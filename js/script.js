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
               img.style.height = '250px'
               img.style.width = '250px'
               document.body.style.background = '#C2C9F2'
           } else if (idade < 21) {
               //Jovem
               img.setAttribute('src','./js/jovemhomem.png')
               img.style.height = '250px'
               img.style.width = '250px'
               document.body.style.background = '#91B2F2'
           } else if (idade < 50){
               //Adulto
               img.setAttribute('src','./js/adultohomem.png')
               img.style.height = '250px'
               img.style.width = '250px'
               document.body.style.background = '#418EF2'
           } else{
               //Idoso
               img.setAttribute('src','/js/idosohomem.png')
               img.style.height = '250px'
               img.style.width = '250px'
               document.body.style.background = '#345573'
           }
        
        } else if (fsex[1].checked){
           genero = 'Mulher'
           if (idade >= 0 && idade < 10){
              //Criança
              img.setAttribute('src','./js/criancamulher.png')
              img.style.height = '250px'
              img.style.width = '250px'
              document.body.style.background = '#DDB3AF'
           }else if (idade < 21) {
              //Jovem
              img.setAttribute('src','./js/jovemmulher.png')
              img.style.height = '250px'
              img.style.width = '250px'
              document.body.style.background = '#C19F9B'
           } else if (idade < 50){
              //Adulto
              img.setAttribute('src','./js/adultomulher.png')
              img.style.height = '250px'
              img.style.width = '250px'
              document.body.style.background = '#AC8B82'
           } else{
              //Idoso
              img.setAttribute('src','./js/idosomulher.png')
              img.style.height = '250px'
              img.style.width = '250px'
              document.body.style.background = '#7D5263'
           }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
    }
}