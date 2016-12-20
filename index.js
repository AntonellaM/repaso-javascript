"use strict"
console.log("Repasando JavaScript")

var paragraph = document.querySelector("div")
paragraph.innerHTML = "He aprendido bien cómo funcionan los bucles"
var resultado = ""
var frase = "<p>He aprendido bien cómo funcionan los bucles</p>"
var elegirColor= "<select> <option>blanco</option><option>azul</option><option>rojo</option> <option>verde</option><option>amarillo</option> <option>rosa</option></select>"

for (var i = 0; i < 100; i++) {

  resultado = resultado + frase + elegirColor

}

paragraph.innerHTML = resultado

var selector=document.querySelector("select")

function usuarioElige(event){
  var numeros=event.target.selectedIndex
  document.querySelector("p").style.color="red"
  if (numeros===0) {
    document.querySelector("p").style.color="white"
  } else if(numeros===1){
    document.querySelector("p").style.color="blue"
  }else if(numeros===2){
    document.querySelector("p").style.color="red"
  }else if(numeros===3){
    document.querySelector("p").style.color="green"
  }else if(numeros===4){
    document.querySelector("p").style.color="yellow"
  }else{
    document.querySelector("p").style.color="pink"
  }
}

selector.addEventListener("change", usuarioElige)
