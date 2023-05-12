function timeConversion(s) {
    // checks if AM or PM
    // if AM...
    if (s.toUpperCase().includes('A')) {
        // if AM and is in the midnight hour
        if (s.includes('12')) {
            // convert '12' to '00'
            let militaryTime = '00' + s.slice(2, 10)
            // return timecode only, w/o AM/PM
            return(militaryTime.slice(0, 8)) 
        } else {
            // return timecode only, w/o AM/PM
            return(s.slice(0, 8))
    } 
    // if PM...
} else {
        // separates string's first two characters
        let hours = s.slice(0,2)
        // and converts to type num and adds 12
        hours = parseInt(hours) + 12
        // converts back to string and concats w/ s
        let militaryTime = hours.toString() + s.slice(2,8)
        return militaryTime
    }
}


timeConversion('05:12:12PM')