var areaDeTexto = document.querySelector(".mensajeParaEncriptar");
var textarea = document.querySelector(".mensajeEncriptado");
var answer = document.getElementById("copyAnswer");
var copy   = document.querySelector(".botonCopiar");

copy.addEventListener('click', function(e) {
   textarea.select(); 
   copy.classList.add("btnActive");
   try {
       var successful = document.execCommand('copy');
       if(successful) 
        { 
            copy.innerHTML = 'Copiado!';
            setTimeout(function(){
                copy.classList.remove("btnActive");
                copy.innerHTML = 'Copiar';
            },1500)
            mensajeEncriptado.classList.remove("mensajeEncriptadoVisible");
            mensajeEncriptado.classList.add("mensajeEncriptado");
            imagenMuneco.classList.remove("imagenesocultas");
            imagenFrame5.classList.remove("imagenesocultas");
            setTimeout(function(){
                copy.classList.remove("copiar");
                copy.classList.add("botonCopiar");
            },1500)
        }
       else answer.innerHTML = 'Incapaz de copiar!';
   } catch (err) {
       answer.innerHTML = 'Browser no soportado!';
   }
});

function reset(){
    areaDeTexto.value = "";
    spanError.classList.remove("spanVisible");
    spanError.classList.add("span");
}


