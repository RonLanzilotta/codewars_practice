function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let positions = []
    
    for (let i = 0; i < text.length; i++) {
      if (alphabet.includes(text[i].toLowerCase())) {
        for (let j = 0; j < alphabet.length; j++) {
          if (alphabet[j] === text[i].toLowerCase()) {
            positions.push(String(j + 1))

          }
        }
      }
    }
    return positions.join(" ")
  }

  alphabetPosition("Here is a STRING")