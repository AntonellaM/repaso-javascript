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

 