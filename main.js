const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje");
const hideTxt = document.querySelector(".pbox");
const showCopybtn = document.querySelector(".btn-copiar");


function encriptar(string_Encriptada){
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  string_Encriptada = string_Encriptada.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if(string_Encriptada.includes(matrizCodigo[i][0])){
      string_Encriptada = string_Encriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
    }
   }
   return string_Encriptada;
}

function btnEncriptar(){
  const txtEncriptado = encriptar(inputTexto.value);
  mensaje.value = txtEncriptado;
  inputTexto.value ="";
  hideTxt.style.display = "none";
  showCopybtn.style.display = "block";
  
  mensaje.style.background ="#292b36";
  
  
}

function desencriptar(string_Desencriptada){
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  string_Desencriptada = string_Desencriptada.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if(string_Desencriptada.includes(matrizCodigo[i][1])){
      string_Desencriptada = string_Desencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
    }
   }
   return string_Desencriptada;
}
function btnDesencriptar(){
  const txtDesencriptado = desencriptar(inputTexto.value);
  mensaje.value = txtDesencriptado;
  inputTexto.value = "";
  hideTxt.style.display = "none";
  showCopybtn.style.display = "block";
  mensaje.style.background ="#292b36";
}


function copiar() {
    
    mensaje.select();
    document.execCommand("copy")
    mensaje.value ="";
    
    alert("Texto Copiado")
}
