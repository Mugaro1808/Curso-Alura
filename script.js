const textarea = document.getElementById('textarea');

textarea.addEventListener('input', function() {
    this.style.height = 'auto'; 
    this.style.height = (this.scrollHeight + 10) + 'px'; 
});

function encryptText() {
    let inputText = textarea.value; // Cambiado a textarea.value
    let encryptedText = customEncrypt(inputText.toLowerCase());
    document.getElementById('encryptedText').innerText = 'Texto encriptado: ' + encryptedText;
}

function decryptText() {
    let inputText = textarea.value; // Cambiado a textarea.value
    let decryptedText = customDecrypt(inputText.toLowerCase());
    document.getElementById('encryptedText').innerText = 'Texto desencriptado: ' + decryptedText;
}

function customEncrypt(text) {
    let map = {
        a: 'ai', 
        e: 'enter',
        i: 'imes',
        o: 'ober',
        u: 'ufat',
    };
    return text.split('').map(letter => map[letter] || letter).join('');
}

function customDecrypt(text) {
    let map = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u',

    };
    
    let decryptedText = text;
    for (let key in map) {
        let regex = new RegExp(key, 'g');
        decryptedText = decryptedText.replace(regex, map[key]);
    }
    return decryptedText;
}

function removeImage() {
    const image = document.getElementById('muñeco');
    const imagen = document.getElementById('texto2');
    if (image) {
        image.remove();
    }
    if (imagen) {
        imagen.remove();
    }
}

