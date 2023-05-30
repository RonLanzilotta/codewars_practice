function reorderSchedule(schedule, availabilities) {
    // init a Set to keep track of whether or not a name appears more than once in the schedule
    const seen = new Set()
    // init arr to store the reordered schedule
    const reordered = [];

    // loop through each name in the given schedule
    for (const name of schedule) {
        // if the name has been seen before...
        if (seen.has(name)) {
            // insert it next to the first instance of the name within the reordered arr.
            reordered.splice(reordered.indexOf(name), 0, name)
        } else {
            // add name to reordered arr, while maintaining its index position to preserve schdeuling priority
            reordered[schedule.indexOf(name)] = name
            // add the name to the Set in case there is a duplicate
            seen.add(name)
        }
    }

    
    for (let i=0; i<reordered.length; i++) {
        for (let j=0; j<availabilities.length; j++) {
            const [availName, start, end] = availabilities[j]
            if (availabilities[j].includes(reordered[i])) {
                if (!(start <= i+1 && i+1 < end)) {
                    console.log(reordered[i])
                    for (let k=0; k<reordered.length; k++) {
                        console.log(reordered[k], reordered[i])
                        if (reordered[k] != reordered[i]) {
                            reordered.splice(i, 1, reordered[k])
                            reordered.splice(k, 1)
                            break
                        }
                    }
                }
            }
        }
    }
    
    return reordered;
}
console.log(reorderSchedule(['Franco', 'Riley', 'Josh', 'Franco', 'Ron'], [['Ron', 2, 7], ['Kai', 2, 5], ['Jared', 3, 7], ['Matt', 1, 2], ['Raff', 5, 9], ['Dave', 1, 7], ['Ben', 3, 8], ['Franco', 2, 4], ['Riley', 1, 4], ['Josh', 3, 8]]))


// ['Matt', 'Kai', 'Ben', 'Jared']