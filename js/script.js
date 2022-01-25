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
               img.setAttribute('src','./js/criancaHomem.jpg')
               img.style.height = '200px'
               img.style.width = '200px'
               img.style.borderRadius = '50%'
               img.style.marginTop = '10px'
               document.body.style.background = '#C2C9F2'
           } else if (idade < 21) {
               //Jovem
               img.setAttribute('src','./js/jovemHomem.jpg')
               img.style.height = '200px'
               img.style.width = '133px'
               img.style.borderRadius = '50%'
               img.style.marginTop = '10px'
               document.body.style.background = '#91B2F2'
           } else if (idade < 50){
               //Adulto
               img.setAttribute('src','./js/adultoHomem.jpg')
               img.style.height = '200px'
               img.style.width = '250px'
               img.style.borderRadius = '50%'
               img.style.marginTop = '10px'
               document.body.style.background = '#418EF2'
           } else{
               //Idoso
               img.setAttribute('src','/js/homemVelho.jpg')
               img.style.height = '200px'
               img.style.width = '150px'
               img.style.borderRadius = '50%'
               img.style.marginTop = '10px'
               document.body.style.background = '#345573'
           }
        
        } else if (fsex[1].checked){
           genero = 'Mulher'
           if (idade >= 0 && idade < 10){
              //Criança
              img.setAttribute('src','./js/criancaMulher.jpg')
              img.style.height = '200px'
              img.style.width = '200px'
              img.style.borderRadius = '50%'
              img.style.marginTop = '10px'
              document.body.style.background = '#DDB3AF'
           }else if (idade < 21) {
              //Jovem
              img.setAttribute('src','./js/jovemMulher.jpg')
              img.style.height = '200px'
              img.style.width = '200px'
              img.style.borderRadius = '50%'
              img.style.marginTop = '10px'
              document.body.style.background = '#C19F9B'
           } else if (idade < 50){
              //Adulto
              img.setAttribute('src','./js/adultoMulher.jpg')
              img.style.height = '200px'
              img.style.width = '200px'
              img.style.borderRadius = '50%'
              img.style.marginTop = '10px'
              document.body.style.background = '#AC8B82'
           } else{
              //Idoso
              img.setAttribute('src','./js/idosoMulher.jpg')
              img.style.height = '200px'
              img.style.width = '200px'
              img.style.borderRadius = '50%'
              img.style.marginTop = '10px'
              document.body.style.background = '#7D5263'
           }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Você é um/uma ${genero} com ${idade} anos`
       res.appendChild(img)
    }
}