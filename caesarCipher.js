function caesarCipher(s, k) {
    let output = ''
    for (let i = 0; i < s.length; i++){
        let char = s.charCodeAt(i)

        if (k > 26) {        
            k = k % 26
        }

        if (65 <= char && char <= 90) {
            if (char + k > 90) {
                let newCode = char - 26 + k
                output += String.fromCharCode(newCode)
            } else {
                let newCode = char + k
                output += String.fromCharCode(newCode)
            }
        } else if (97 <= char && char <= 122) {
            if (char + k > 122) {
                let newCode = char - 26 + k
                output += String.fromCharCode(newCode)
            } else {
                let newCode = char + k
                output += String.fromCharCode(newCode)
            }
        } else {
            output += s[i]
        }
    }
    return output
}

caesarCipher('6DWV95HzxTCHP85dvv3NY2crzt1aO8j6g2zSDvFUiJj6XWDlZvNNr'
, 87)

