function palindromeIndex(s) {
    function isPalindrome(s) {
        for (let i = 0; i < Math.floor(s.length / 2); i++) {
            if (s[i] !== s[s.length - 1 - i]) {
                return false
            }
        } return true
    }

    
}

palindromeIndex('baa')