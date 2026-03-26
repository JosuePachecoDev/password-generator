# Algoritmo
Daré una descripción del algoritmo desde el punto de vista del usuario promedio:

1. El usuario abre la página que contiene el generador de contraseñas.
2. El usuario ve el generador de contraseñas.
3. El usuario analiza cómo utilizar el generador de contraseñas.
4. El usuario entiende que, para generar una contraseña necesita marcar o desmarcar las casillas que habilitan los caracteres que se utilizrán (símbolos, mayúsculas, minúsculas y números).
5. El usuario entiende que, para generar una contraseña necesita deslizar el widget de "*Longitud de caracteres*" para establecer la longitud de su nueva contraseña.
6. El usuario habilita o deshabilita los grupos de caracteres que necesita para generar la nueva contraseña.
7. El usuario desliza el widget "*Longitud de caracteres*" para establecer la longitud de su nueva contraseña.
8. El usuario presiona el botón "*Generar*".
9. El navegador genera un <a url="https://concepto.de/grafema/">grafema</a> (cadena de caracteres) con los caracteres y longitud que se habilitaron.
10. El usuario presiona el botón *Generar* hasta que esta satisfecho con la contraseña generada.
11. El usuario presiona el botón *Copiar* para guardar la contraseña en el portapapeles de su computador.

***Fin del algoritmo***

# Funcionamiento del script
El script inicia definiendo e inicializando constantes que apuntan a elementos del DOM (los <code>`<input>`</code>) e inicializando el valor de la longitud de caracteres en 12.

Después se agrega un escuchador de eventos al widget de longitud de caracteres. Esto para que se actualice y muestre su valor en la página web.

Pero la verdadera magia está en las funciones. La función principal es la función <code>trigger()</code>, y se invoca cuando el usuario presiona el botón "Generar".

La función <code>trigger()</code> revisa el estado de cada entrada (checkbox). Las casillas que estén habilitadas, empujarán sus caracteres a un arreglo. Este arreglo se declara e inicializa con cero elementos y se llena sólo con los caracteres de su entrada. Por ejemplo:
```js
if (checkboxLowerCase.checked) {
  characters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j");
}

if (checkboxNumbers.checked) {
  characters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
}
```
Sabiendo esto, podemos generar un grafema sólo con los caracteres que serán usados para generar la nueva contraseña.

Teniendo el arreglo de caracteres que se utilizarán, hacemos uso de un bucle <code>for</code>, que agrega (al arreglo <code>randomIndex</code>) un número aleatorio entre 0 y la longitud del arreglo de caracteres menos 1 (para que no empuje un elemento fuera del rango de índices del arreglo). El número de iteraciones que tomará el bucle será la propiedad <code>value</code> de la entrada de longitud de caracteres.

Estos números aleatorios actuarán como índices, así que se utiliza el método de los arreglos <code>.map()</code> para hacer que se seleccionen los caracteres que corresponden a los índices aleatorios.

Finalmente, se unen todos los elementos con el método <code>.join()</code> y la contraseña se actualiza en la página web.