document.getElementById("botaoEnviar").addEventListener("click", ValidaFormulario)
  
function ValidaFormulario(){
  if(nome.value != "" && email.value != ""){
    alert("Vai Brasyl! Agora vc é um membro dessa comunidade")
  }else{
    alert("Por favor, preencha os campos nome e email!") 
  }
}
 
var nome = document.getElementById("nome");
var email = document.getElementById("email");

