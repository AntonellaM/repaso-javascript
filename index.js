console.log("Repasando JavaScript")


var paragraph = document.querySelector("div");
paragraph.innerHTML = "He aprendido bien cómo funcionan los bucles";
var frase = "He aprendido bien cómo funcionan los bucles"
var resultado = "<p>" + "He aprendido bien cómo funcionan los bucles" + "</p>"


for (var i = 0; i < 100; i++) {

  frase = frase +  resultado

  console.log (frase)
}

 paragraph.innerHTML = frase

