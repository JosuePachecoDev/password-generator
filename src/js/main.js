const password = document.getElementById("generated-password");
const passwordLength = document.getElementById("input-caracters-length");
const tagValue = document.getElementById("label-from-length");
passwordLength.value = 12;

const checkboxCapitalLetters = document.getElementById("uppercase-checkbox");
const checkboxLowerCase = document.getElementById("lowercase-checkbox");
const checkboxNumbers = document.getElementById("number-checkbox");
const checkboxSim = document.getElementById("symbol-checkbox");
const checkboxes = document.querySelectorAll(".chkb");

const copyButton = document.getElementById("copy-button");

const secChar = document.getElementById("char");

const insertElement = (element, txtCon, father) => {
    element.innerHTML = txtCon;
    father.appendChild(element);
};

insertElement(document.createElement("h2"), "Caracteres", secChar);
insertElement(document.createElement("p"), "Ingresa los caracteres separados por comas (sin espacios)", secChar)

insertElement(document.createElement("label"), `Símbolos:<br>`, secChar);
const symbolsIn = document.createElement("input");
symbolsIn.classList.add("i");
// console.log(typeof symbolsIn)
symbolsIn.value = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ";", "<", ">", "=", "?", "@", "[", "]", "_", "{", "}", "|"];
secChar.appendChild(symbolsIn);

insertElement(document.createElement("label"), `Mayúsculas:<br>`, secChar);
const capitalLettersIn = document.createElement("input");
capitalLettersIn.classList.add("i");
capitalLettersIn.value = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
secChar.appendChild(capitalLettersIn);

insertElement(document.createElement("label"), `Minúsculas:<br>`, secChar);
const lowercaseIn = document.createElement("input");
lowercaseIn.classList.add("i");
lowercaseIn.value = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
secChar.appendChild(lowercaseIn);

insertElement(document.createElement("label"), `Números:<br>`, secChar);
const numbersIn = document.createElement("input")
numbersIn.classList.add("i");
numbersIn.value = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
secChar.appendChild(numbersIn);

checkboxes.forEach(chk => {
    chk.addEventListener('change', function() {
        const checked = document.querySelectorAll('.chkb:checked');
        // console.log(typeof checked)

        if (checked.length === 0) {
            this.checked = true;
            alert("Debe haber al menos una opción seleccionada");
        }
    });
});

passwordLength.addEventListener("input", () => {
    tagValue.textContent = passwordLength.value;
});

const pnp = (text) => {
    password.textContent = text;
};

function trigger() {
    let characters = [];
    let selectedCharacters = [];
    
    // VERIFICAR CORRECTA SINTAXIS EN ENTRADAS DE CARACTERES
    if (checkboxCapitalLetters.checked) {
        if (capitalLettersIn.value) {
            characters.push(...capitalLettersIn.value.split(","));
        } else {
            pnp("Error: Entrada vacía");
            copyButton.disabled = true;
            return;
        }
    }
    if (checkboxLowerCase.checked) {
        if (lowercaseIn.value) {
            characters.push(...lowercaseIn.value.split(","));
        } else {
            pnp("Error: Entrada vacía");
            copyButton.disabled = true;
            return;
        }
    }
    if (checkboxNumbers.checked) {
        if (numbersIn.value) {
            characters.push(...numbersIn.value.split(","));
        } else {
            pnp("Error: Entrada vacía");
            copyButton.disabled = true;
            return;
        }
    }
    if (checkboxSim.checked) {
        if (symbolsIn.value) {
            characters.push(...symbolsIn.value.split(","));
        } else {
            pnp("Error: Entrada vacía");
            copyButton.disabled = true;
            return;
        }
    }
    
    // console.log(characters);
    for (let i = 0; i < passwordLength.value; i++) {
        selectedCharacters.push(characters[aleatorio(0, characters.length)]);
    }

    let newPassword = `${selectedCharacters.join("")}`;
    password.textContent = newPassword;
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function copy() {
    try {
        await navigator.clipboard.writeText(password.innerHTML);
    } catch (err) {
        console.error('Error al copiar: ', err);
    }
}