## Repasando JavaScript

En este repositorio vamos a realizar algunos ejercicios para repasar JavaScript durante el curso de Adalab. ¡Vamos al turrón!

### 0. Preparando el entorno

Para empezar vamos a aprender cómo usar realizar los ejercicios en vuestro equipo local. Para ello debes clonar (hacer una copia) de este repositorio en tu equipo desde el terminal de comandos. Abre el terminal y muévete (usando `cd`, si no lo conoces [mira esta documentación][1] a la localización de tu ordenador donde quieras crear el proyecto. A continuación, ejecuta este comando:

```git clone https://github.com/Adalab/repaso-javascript.git```

¡Ya tienes todo el código en tu equipo! Ahora ábrelo en tu editor favorito (en clase usamos normalmente [Sublime Text 3][2], en tu navegador y estamos listos para empezar a trabajar.

### 1. Repítelo 100 veces

¡Es hora de actuar! En la pizarra (nuestra página web) tenemos que escribir 100 veces la frase "He aprendido bien cómo funcionan los bucles", cada vez en una línea diferente. ¿Podrás conseguirlo?

#### ¡Conseguido!

Cuando tengamos todo funcionando, vamos a guardar el resultado en nuestro repositorio de control de versiones con git. Para ello tenemos que ejecutar los siguientes comandos en orden:

```git add listado-de-ficheros-modificados```, siendo el listado de ficheros modificados por ejemplo `index.js` si sólo hemos modificado el JS, o `index.html index.js` si hemos modificado estos dos ficheros (nombres separados por un espacio)

```git commit -m mensaje-descriptivo-del-commit```, siendo el mensaje algo que diga qué cambios hemos hecho en el código (qué hemos añadido o quitado). Por ejemplo podríamos poner "Añadida la funcionalidad que pinta en la pizarra 100 veces un mensaje". ¡Con esto ya tenemos esta funcionalidad para siempre en nuestro control de versiones!

```git push origin master``` para publicar los cambios en el repositorio de Adalab en GitHub. De esta forma el resto de adalabers tendrán acceso al código que has subido. 

#### ¿Cómo alguien se descarga tus cambios?

Para que las demás puedan descargar la última versión del código tienen que seguir estos pasos:

1. Abir el terminal

2. Moverte a la carpeta donde está el proyecto (si aún no lo tienes, descárgalo usando `git clone` del ejercicio anterior)

3. Ejecuta `git pull` para descargar los datos de la última versión del código en el repositorio. ¡Ya tienes todo listo para seguir!


### 2. Un combo por línea

¡Seguimos con nuestra pizarra! Ahora vamos a añadir un combo (elemento `select` de HTML) al final de cada línea con el texto que añadimos antes. En el combo podremos seleccionar un color de los siguientes: blanco, azul, rojo, verde, amarillo, rosa. Por defecto, el combo tendrá seleccionado el color blanco que es el color del texto de los párrafos. 

#### ¡Conseguido!

Sigue los pasos de git del ejercicio anterior para subir el código al repostorio en GitHub, y que el resto se lo descarguen.

### 3. Vamos a darle color
Ahora viene lo bueno: vamos a añadir el comportamiento a la web para que al modificar un combo se cambie el color del texto de esa línea al color indicado en el combo. Por ejemplo, si modificamos el color del combo de la línea 3 a rosa, el texto de la línea 3 se convierte en rosa.

#### ¡Conseguido!

Sigue los pasos de git del ejercicio anterior para subir el código al repostorio en GitHub, y que el resto se lo descarguen.

[1]: https://tutorial.djangogirls.org/es/intro_to_command_line/#cambia-el-directorio-actual
[2]: https://www.sublimetext.com/3