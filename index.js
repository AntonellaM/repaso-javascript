"use strict"
console.log("Repasando JavaScript")

var paragraph = document.querySelector("div")
paragraph.innerHTML = "He aprendido bien cómo funcionan los bucles"
var resultado = ""
var frase = "<p>He aprendido bien cómo funcionan los bucles</p>"

for (var i = 0; i < 100; i++) {

  var elegirColor= "<select id="+i+"> <option>blanco</option><option>azul</option><option>rojo</option> <option>verde</option><option>amarillo</option> <option>rosa</option></select>"


  resultado = resultado + frase + elegirColor
}

paragraph.innerHTML = resultado

var selectores=document.querySelectorAll("select")


function usuarioElige(event){
  var numeros=event.target.selectedIndex
  var selectModificado = event.target.id
  var parrafos=document.querySelectorAll("p")
  var parrafo = parrafos[selectModificado]
  if (numeros===0)
    parrafo.style.color="white"
  else if(numeros===1)
    parrafo.style.color="blue"
  else if(numeros===2)
    parrafo.style.color="red"
  else if(numeros===3)
    parrafo.style.color="green"
  else if(numeros===4)
    parrafo.style.color="yellow"
  else
    parrafo.style.color="pink"

}

for (var j = 0; j < selectores.length; j++)
  selectores[j].addEventListener("change", usuarioElige)


