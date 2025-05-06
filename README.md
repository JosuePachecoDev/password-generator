# password-generator
El algoritmo es bastante sencillo y comienza cuando el usuario presiona el botón "Generar", lo que hará que el botón llame a la función <code>trigger()</code>, que revisará el estado de cada casilla individualmente. <br>
Las casillas que estén habilitadas, empujarán a un arreglo (<code>characters=[]</code>) sus carácteres. Por ejemplo:
  <pre>
    if (checkboxLowerCase.checked) {
      characters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    }
    
    if (checkboxNumbers.checked) {
      characters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    }
</pre>
Una vez hecho esto, el navegador ya sabe qué carácteres se necesitan para generar la contraseña. Posteriormente se ejecutará un bucle sencillo, que iterará su bloque de código mientras la varable <code>i</code> sea menor al valor que el usuario haya establecido en la longitud de la contraseña: <br>
<pre>
  for (let i = 0; i < passwordLength.value; i++) {
    randomIndex.push(aleatorio(0, characters.length));
  }
</pre>
Cada iteración empujará a otro arreglo (<code>randomIndex=[]</code>), un número aleatorio de entre 0 y la longitud del arreglo de carácteres (<code>characters.length</code>). Estos números actuarán como índices, es por eso que el rango de aleatoriedad es de 0 hasta la longitud del arreglo de caracteres (porque si la función escoge un número fuera de este rango, no habrá elemento con ese número de índice). 
<h2>Función de aleatoriedad</h2>
<pre>
  function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
</pre>
Esta función la aprendí en el <a href="https://platzi.com/cursos/programacion-basica/" target="_blank">curso de Programación Básica</a> que imparte Platzi. No voy a explicar detalladamente esta función porque en el curso lo explican más que bién (y además es gratuito), pero acá te dejo su material de ponencia para que entiendas mejor la estructura de esta función: <br><br>
<img src="https://static.platzi.com/media/articlases/Images/10-1%20-%20Formula%20para%20emitir%20n%C3%BAmeros%20aleatorios%20en%20un%20rango.jpg">
Basta con decir que, <code>Math.random()</code> me devuelve un número aleatorio entre 0 y 1, <code>Math.random()*(max-min+1)</code> escala ese número para que esté entre 0 y el rango total deseado, al sumarle <code>min</code>, desplazamos ese número al rango deseado y finalmente <code>Math.floor()</code> redondea hacia abajo los decimales para que el número se convierta en un entero.

<h2>Resultado</h2>
Así el arreglo de números aleatorios decidirá los caracteres por medio de su índice y estos se guardarán en una variable que almacenará sólo los caracteres elegidos (<code>selectedCharacters = randomIndex.map(index => characters[index]);</code>).<br>
Y, antes de actualizar los valores en el DOM, los convertimos en una cadena de texto: <code>newPassword = `${selectedCharacters.join("")}`;</code>, que será la que sustituirá al texto que contenga la antigua contraseña (si la hay). <br>
Este sencillo algoritmo se ejecutará cada vez que se invoque a la función <code>trigger()</code>, es decir, cada vez que el usuario accione el botón "Generar". Y cuando eso suceda, los valores de los arreglos y variables se vaciarán, para que los valores anteriores no interfieran con los nuevos.
