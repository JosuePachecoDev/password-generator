const password = document.getElementById("generated-password");
const passwordLength = document.getElementById("input-caracters-length");
const tagValue = document.getElementById("label-from-length");
passwordLength.value = 12;
const checkboxCapitalLetters = document.getElementById("uppercase-checkbox");
const checkboxLowerCase = document.getElementById("lowercase-checkbox");
const checkboxNumbers = document.getElementById("number-checkbox");
const checkboxSim = document.getElementById("symbol-checkbox");
const copyButton = document.getElementById("copy-button");
const checkboxes = document.querySelectorAll(".chkb")

checkboxes.forEach(chk => {
    chk.addEventListener('change', function() {
        const checked = document.querySelectorAll('.chkb:checked');
        console.log(typeof checked)

        if (checked.length === 0) {
            this.checked = true;
            alert("Debe haber al menos una opción seleccionada");
        }
    });
});

function trigger() {
    let characters = [];
    let selectedCharacters = [];

    if (checkboxCapitalLetters.checked) {
        characters.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    }
    if (checkboxLowerCase.checked) {
        characters.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    }
    if (checkboxNumbers.checked) {
        characters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    }
    if (checkboxSim.checked) {
        characters.push("!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ";", "<", ">", "=", "?", "@", "[", "]", "_", "{", "}", "|");
    }

    for (let i = 0; i < passwordLength.value; i++) {
        selectedCharacters.push(characters[aleatorio(0, characters.length)]);
    }

    let newPassword = `${selectedCharacters.join("")}`;
    password.textContent = newPassword;
}

passwordLength.addEventListener("input", () => {
    tagValue.textContent = passwordLength.value;
});

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