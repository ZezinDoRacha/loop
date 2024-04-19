
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("VOCE APOIA A BROTHERAGEM");

    
    if (respostaTime.toLowerCase() === "sim" "claro" ) {
      alert("Isso mesmo!!!!!!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("tente novamente");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
