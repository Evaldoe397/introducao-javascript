
const inputTexto= document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage= "none"
}

function encriptar(stringEncriptada) {
        let matrizCodigo = [["a", "vn"],["e", "tr"],["i", "xb"],["o", "fm"],["u","spq"]];
        stringEncriptada = stringEncriptada.toLowerCase();

        for (let i=0; i<matrizCodigo.length; i++) {
            if (stringEncriptada.includes(matrizCodigo[i][0])) {
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            }
        }
        return stringEncriptada
}
function btndesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensagem.value = textoDesencriptado
    mensagem.style.backgroundImage= "none"
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["vn", "a"],["tr", "e"],["xb", "i"],["fm", "o"],["spq","u"]];
        stringDesencriptada = stringDesencriptada.toLowerCase();

        for (let i=0; i<matrizCodigo.length; i++) {
            if (stringDesencriptada.includes(matrizCodigo[i][0])) {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            }
        }
        return stringDesencriptada
}
