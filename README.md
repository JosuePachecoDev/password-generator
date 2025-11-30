# password-generator
<h1>Funcionamiento del script</h1>
El script comienza cuando el usuario presiona el botón "Generar", lo que hará que el botón llame a la función <code>trigger()</code>, que revisará el estado de cada casilla individualmente. <br>
Las casillas que estén habilitadas, empujarán sus caracteres a un arreglo. Por ejemplo:
<pre>
    if (checkboxLowerCase.checked) {
      characters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    }
    
    if (checkboxNumbers.checked) {
      characters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    }
</pre>
Una vez hecho esto, el navegador ya sabe qué caracteres srán usados para generar la nueva contraseña. <br>
Después, se ejecutará un bucle que empujará un número aleatorio al arreglo <code>randomIndex</code>. Estos números actuarán como índices, es por eso que el rango de aleatoriedad es de 0 hasta la longitud del arreglo de caracteres (porque si la función escoge un número fuera de este rango, no habrá elemento con ese número de índice). 
<h2>Función de aleatoriedad</h2>
Esta función la aprendí en el <a href="https://platzi.com/cursos/programacion-basica/" target="_blank">curso de Programación Básica</a> que imparte Platzi. No voy a explicar detalladamente esta función porque en el curso lo explican más que bién (y además es gratuito), pero acá te dejo su material de ponencia para que entiendas mejor la estructura de esta función: <br><br>
<img src="https://static.platzi.com/media/articlases/Images/10-1%20-%20Formula%20para%20emitir%20n%C3%BAmeros%20aleatorios%20en%20un%20rango.jpg">

<h2>Resultado</h2>
Así el arreglo de números aleatorios decidirá los caracteres por medio de su índice y estos se guardarán en una variable que almacenará sólo los caracteres elegidos.<br>
Y, antes de actualizar los valores en el DOM, los convertimos a una cadena de texto que será la que sustituirá al texto que contenga la antigua contraseña (si la hay). <br>