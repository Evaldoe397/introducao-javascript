// Crypto

/** @type {[string, string][]} */
const CYPHER = [
    ["a", "vn"],
    ["e", "tr"],
    ["i", "xb"],
    ["o", "fm"],
    ["u", "spq"],
];

/**
 * 
 * @param {string} input 
 * @param {[string, string][]} dictionary 
 * @returns {string}
 */
function replace(input, dictionary) {
    const source = input.toLowerCase();

    let output = source;

    for (let index = 0; index < dictionary.length; index++) {
        const [matcher, replacer] = dictionary[index];

        if (output.includes(matcher)) {
            output = output.replaceAll(matcher, replacer);
        }
    }

    return output;
}

/**
 * @param {string} input
 * @returns {string}
 */
function encrypt(input) {
    return replace(input, CYPHER);
}

/**
 * @param {[A, B]} array 
 * @returns {[B, A]}
 * @template A, B
 */
const invert = ([a, b]) => [b, a];

/**
 * @param {string} input
 * @returns {string}
 */
function decrypt(input) {
    return replace(input, CYPHER.map(invert));
}

// View

const decryptedMessageInput = window.document.querySelector('.input-texto');

const encryptedMessageInput = window.document.querySelector(".mensagem");

const encryptButton = window.document.querySelector('.encriptar');

const decryptButton = window.document.querySelector('.desencriptar');

encryptButton.addEventListener('click', () => {
    encryptedMessageInput.style.backgroundImage = 'none';
    encryptedMessageInput.value = encrypt(decryptedMessageInput.value);
    decryptedMessageInput.value = '';
});

decryptButton.addEventListener('click', () => {
    encryptedMessageInput.style.backgroundImage = 'none';
    decryptedMessageInput.value = decrypt(encryptedMessageInput.value);
    encryptedMessageInput.value = '';
});
