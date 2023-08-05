let calcular = function() {

    let nota = 0
    //questao1
    let questao1 = document.getElementById("q1o3").checked
  
    //questao2
    let questao2 = document.getElementById("q2o2").checked
  
    //questao3
    let questao3 = document.getElementById("q3o3").checked
  
    //questao4
    let questao4 = document.getElementById("q4o2").checked
  
    //questao5
    let questao5 = document.getElementById("q5o1").checked
  
    //questao6
    let questao6a = document.getElementById("q6o1").checked
    let questao6b = document.getElementById("q6o2").checked
    let questao6c = document.getElementById("q6o3").checked
    let questao6d = document.getElementById("q6o4").checked
  
    //questao7
    let questao7a = document.getElementById("q7o1").checked
    let questao7b = document.getElementById("q7o2").checked
    let questao7c = document.getElementById("q7o3").checked
    let questao7d = document.getElementById("q7o4").checked
  
    //questao8
    let questao8a = document.getElementById("q8o1").checked
    let questao8b = document.getElementById("q8o2").checked
    let questao8c = document.getElementById("q8o3").checked
    let questao8d = document.getElementById("q8o4").checked
  
    //questao9
    let questao9a = document.getElementById("q9o1").checked
    let questao9b = document.getElementById("q9o2").checked
    let questao9c = document.getElementById("q9o3").checked
    let questao9d = document.getElementById("q9o4").checked
  
    //questao10
    let questao10a = document.getElementById("q10o1").checked
    let questao10b = document.getElementById("q10o2").checked
    let questao10c = document.getElementById("q10o3").checked
    let questao10d = document.getElementById("q10o4").checked
  
    if (questao1 == true) {
      nota = nota + 1
    }
  
    if (questao2 == true) {
      nota = nota + 1
    }
  
    if (questao3 == true) {
      nota = nota + 1
    }
  
    if (questao4 == true) {
      nota = nota + 1
    }
  
    if (questao5 == true) {
      nota = nota + 1
    }
  
    if ((questao6a == true) && (questao6b == false) && (questao6c == true) && (questao6d == false)) {
      nota = nota + 1
    }
  
    if ((questao7a == true) && (questao7b == false) && (questao7c == false) && (questao7d == true)) {
      nota = nota + 1
    }
  
    if ((questao8a == false) && (questao8b == true) && (questao8c == false) && (questao8d == true)) {
      nota = nota + 0.5
    }
  
    if ((questao9a == true) && (questao9b == true) && (questao9c == false) && (questao9d == true)) {
      nota = nota + 0.5
    }
  
    if ((questao10a == true) && (questao10b == false) && (questao10c == true) && (questao10d == true)) {
      nota = nota + 0.33
    }
  
    let saida = document.getElementById("Resultado")
    saida.innerHTML = nota
  }