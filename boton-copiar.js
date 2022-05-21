var areaDeTexto = document.querySelector(".mensajeParaEncriptar");
var textarea = document.querySelector(".mensajeEncriptado");
var answer = document.getElementById("copyAnswer");
var copy   = document.querySelector(".copiar");
copy.addEventListener('click', function(e) {
   textarea.select(); 
   copy.classList.add("btnActive");
  /* textarea.value = "";*/
   try {
       var successful = document.execCommand('copy');
       if(successful) 
        { 
            copy.innerHTML = 'Copiado!';
            setTimeout(function(){
                // remove css after 1.5 second
                copy.classList.remove("btnActive");
                copy.innerHTML = 'Copiar';
              },1500)

        }
       else answer.innerHTML = 'Incapaz de copiar!';
   } catch (err) {
       answer.innerHTML = 'Browser no soportado!';
   }
});

function reset(){
    areaDeTexto.value = "";
}

