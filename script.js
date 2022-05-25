const inputTexto = document.querySelector(".mensajeParaEncriptar");
const mensajeEncriptado = document.querySelector(".mensajeEncriptado");
const imagenMuneco = document.querySelector("#muneco");
const imagenFrame5 = document.querySelector("#frame5");
const spanError = document.querySelector(".span");

function btnencriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensajeEncriptado.value = textoEncriptado;
    mensajeEncriptado.classList.remove("mensajeEncriptado");
    mensajeEncriptado.classList.add("mensajeEncriptadoVisible");
    imagenMuneco.classList.add("imagenesocultas");
    imagenFrame5.classList.add("imagenesocultas");
    copy.classList.remove("botonCopiar");
    copy.classList.add("copiar");
    if(inputTexto.value == ""){
        spanError.classList.remove("span");
        spanError.classList.add("spanVisible");
    } else {
        spanError.classList.remove("spanVisible");
        spanError.classList.add("span");
    }
}

function encriptar(stringParaEncriptar){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringParaEncriptar;
}

function btndesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensajeEncriptado.value = textoDesencriptado;
    mensajeEncriptado.classList.remove("mensajeEncriptado");
    mensajeEncriptado.classList.add("mensajeEncriptadoVisible");
    imagenMuneco.classList.add("imagenesocultas");
    imagenFrame5.classList.add("imagenesocultas");
    copy.classList.remove("botonCopiar");
    copy.classList.add("copiar");
    if(inputTexto.value == ""){
        spanError.classList.remove("span");
        spanError.classList.add("spanVisible");
    } else {
        spanError.classList.remove("spanVisible");
        spanError.classList.add("span");
    }
}

function desencriptar(stringParaDesencriptar){
    let matrizCodigo = [["enter", "e"],["imes", "i"],["ai", "a"],["ober", "o"],["ufat", "u"]];
    stringParaDesencriptar = stringParaDesencriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringParaDesencriptar.includes(matrizCodigo[i][0])){
            stringParaDesencriptar = stringParaDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringParaDesencriptar;
}