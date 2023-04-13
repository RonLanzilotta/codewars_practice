function toCamelCase(str){
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "-" || str[i] === "_") {
        str[i + 1].toUpperCase()
        str.slice(0, str[i])
      }
    }
    return str
  }