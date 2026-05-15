const password = document.getElementById("generated-password");
const copyButton = document.getElementById("copy-button");

const checkboxCapitalLetters = document.getElementById("uppercase-checkbox");
const checkboxLowerCase = document.getElementById("lowercase-checkbox");
const checkboxNumbers = document.getElementById("number-checkbox");
const checkboxSim = document.getElementById("symbol-checkbox");
const checkboxes = document.querySelectorAll(".chkb");
const passwordLength = document.getElementById("input-caracters-length");
passwordLength.value = 12;
const tagValue = document.getElementById("label-from-length");
passwordLength.addEventListener("input", () => {
    tagValue.textContent = passwordLength.value;
});

const secChar = document.getElementById("char");

checkboxes.forEach(chk => {
    chk.addEventListener('change', function() {
        const checked = document.querySelectorAll('.chkb:checked');
        // console.log(typeof checked);

        if (checked.length === 0) {
            this.checked = true;
            alert("Debe haber al menos una opción seleccionada");
        }
    });
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