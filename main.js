function Converter() {
    var valorElemento = document.getElementById("bim1")
    var bim1 = valorElemento.value;
    var valorElemento2 = document.getElementById("bim2")
    var bim2 = valorElemento2.value
    var valorElemento3 = document.getElementById("bim3")
    var bim3 = valorElemento3.value
    var valorElemento4 = document.getElementById("bim4")
    var bim4 = valorElemento4.value
    var media = (parseInt(bim1) + parseInt(bim2) + parseInt(bim3) + parseInt(bim4)) / 4 

    console.log(media)

    var mediaFinal = document.getElementById("valorConvertido")
    var valorConvertido = "Sua média é " + media
    mediaFinal.innerHTML = valorConvertido; 

  
  
  }