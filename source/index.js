function matchLength(length, str) {
    let matchedText = ""

    for (let i = 0; i < length; i++) {
        matchedText += str[i % str.length]
    }

    return matchedText
}

function encrypt(plainText, key) {
    if (plainText.length > key.length) {
        key = matchLength(plainText.length, key)
    }

    let encryptedText = ""
    
    for (let i = 0; i < plainText.length; i++) {
        const plainChar = plainText[i].charCodeAt(0) % 128
        const keyChar = key[i].charCodeAt(0) % 128
        
        const encryptedChar = (plainChar + keyChar) % 128
        
        encryptedText += String.fromCharCode(encryptedChar)
    }
    
    return encryptedText
}

function decrypt(cipherText, key) {
    if (cipherText.length > key.length) {
        key = matchLength(cipherText.length, key)
    }

    let decryptedText = ""

    for (let i = 0; i < cipherText.length; i++) {
        const cipherChar = cipherText[i].charCodeAt(0) % 128
        const keyChar = key[i].charCodeAt(0) % 128

        const decryptedChar = (cipherChar - keyChar + 128) % 128

        decryptedText += String.fromCharCode(decryptedChar)
    }

    return decryptedText
}

// const enc = encrypt("mrrrpmeo741%^156w", "msdfhuisdy7u89g8914uh7895gyhbja")
// console.log(enc, decrypt(enc, "msdfhuisdy7u89g8914uh7895gyhbja"))