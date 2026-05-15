const insertElement = (element, txtCon, display = true, father = secChar) => {
    if (element.tagName.toLowerCase() == "input") {
        element.value = txtCon;
        element.classList.add("i");
    } else {
        element.innerHTML = txtCon;
    };

    if (display) {
        father.appendChild(element);
    } else {
        return element;
    };
};

insertElement(document.createElement("h2"), "Caracteres");
insertElement(document.createElement("p"), "Ingresa los caracteres separados por comas (sin espacios)");

insertElement(document.createElement("label"), "Símbolos:<br>");
const symbolsIn = insertElement(document.createElement("input"), ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ";", "<", ">", "=", "?", "@", "[", "]", "_", "{", "}", "|"], display = false);
secChar.appendChild(symbolsIn);

insertElement(document.createElement("label"), `Mayúsculas:<br>`);
const capitalLettersIn = insertElement(document.createElement("input"), ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], display = false);
secChar.appendChild(capitalLettersIn);

insertElement(document.createElement("label"), `Minúsculas:<br>`);
const lowercaseIn = insertElement(document.createElement("input"), ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], display = false);
secChar.appendChild(lowercaseIn);

insertElement(document.createElement("label"), `Números:<br>`, secChar);
const numbersIn = insertElement(document.createElement("input"), ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], display = false);
secChar.appendChild(numbersIn);