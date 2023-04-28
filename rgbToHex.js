function rgbToHex(r, g, b) {

    function converter(c) {
        if (c >= 255) {
            c = 255
        } else if (c <= 0) {
            c = 0
        }
        return c.toString(16)
    }
    let result = ""
    for (let i = 0; i < arguments.length; i++) {
        converter(arguments[i]).length > 1 ? 
        result += converter(arguments[i]) : 
        result += ("0" + converter(arguments[i]))
    }    
    return console.log(result.toUpperCase())
}

rgbToHex(-80, 7, 219)