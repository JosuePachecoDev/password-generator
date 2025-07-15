const password = document.getElementById("generated-password");
const passwordLength = document.getElementById("input-caracters-length");
const tagValue = document.getElementById("label-from-length");
passwordLength.value = 12;
const checkboxCapitalLetters = document.getElementById("uppercase-checkbox");
const checkboxLowerCase = document.getElementById("lowercase-checkbox");
const checkboxNumbers = document.getElementById("number-checkbox");
const checkboxSim = document.getElementById("symbol-checkbox");
const copyButton = document.getElementById("copy-button");

function trigger() {
    let characters = [];
    let randomIndex = [];
    let selectedCharacters;
    let newPassword;
    password.classList.remove('typewriter');

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
        randomIndex.push(aleatorio(0, characters.length));
    }

    selectedCharacters = randomIndex.map(index => characters[index]);
    newPassword = `${selectedCharacters.join("")}`;
    password.textContent = newPassword;

    document.documentElement.style.setProperty("--characters", `${passwordLength.value}ch`);
    document.documentElement.style.setProperty("--characters-steps", `${passwordLength.value}`);
    void password.offsetWidth;
    password.classList.add('typewriter');
}

passwordLength.addEventListener("input", () => {
    tagValue.textContent = passwordLength.value;
});

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function copiarContraseña() {
    try {
        await navigator.clipboard.writeText(password.innerHTML);

        copyButton.style.animation = "none";
        copyButton.offsetHeight;
        copyButton.style.animation = "0.5s operacion-exitosa 1 ease";
    } catch (err) {
        console.error('Error al copiar: ', err);

        copyButton.style.animation = "none";
        copyButton.offsetHeight;
        copyButton.style.animation = "0.5s operacion-fallida 1 ease";
    }
}