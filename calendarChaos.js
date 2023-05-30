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

    // This loop looks at the newly reordered array and checks each element's position against
    // that name's given availability in the availability arr
    
    // as we loop through the reordered arr...
    for (let i=0; i<reordered.length; i++) {
        // look to the availabilities arr...
        for (let j=0; j<availabilities.length; j++) {
            // for the given start and end availability...
            const [availName, start, end] = availabilities[j]
            // but only if the name from reordered arr matches the name from the availabilities subarray.
            if (availabilities[j].includes(reordered[i])) {
                // if the reordered name's index doesn't fall within the same name's availability...
                if (!(start <= i+1 && i+1 < end)) {
                    // loop through reordered arr starting from the current element's index...
                    for (let k=i; k<reordered.length; k++) {
                        // until a new name is found.
                        if (reordered[k] != reordered[i]) {
                            // replace the new name with the old one
                            reordered.splice(i, 1, reordered[k])
                            // delete the new name from its original position to avoid duplicates
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
console.log(reorderSchedule(['Franco', 'Riley', 'Josh', 'Franco', 'Ron', 'Franco', 'Josh', 'Josh'], [['Ron', 2, 7], ['Kai', 2, 5], ['Jared', 3, 7], ['Matt', 1, 2], ['Raff', 5, 9], ['Dave', 1, 7], ['Ben', 3, 8], ['Franco', 2, 5], ['Riley', 1, 4], ['Josh', 3, 8]]))


// ['Matt', 'Kai', 'Ben', 'Jared']