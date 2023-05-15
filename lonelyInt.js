function lonelyinteger(a) {
    return a.filter(num => a.indexOf(num)== a.lastIndexOf(num) ? num : false)
//     while (a.length > 1) {
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 1; j < a.length; j++) {
//             console.log(`a[i] = ${a[i]} a[j] = ${a[j]}`)
//             if (a[j] === a[i]) {
//                 a.splice(a.indexOf(a[j]), 1)
//                 a.splice(a.indexOf(a[i]), 1)
//                 i = 0
//                 console.log(`current array: ${a}`)
//             }
//         } 
//         return console.log(a[i])
//     }
// }
//     return console.log(a[0])
}

lonelyinteger([7, 0, 34, 7, 34, 0, 18, 18, 47, 46, 33, 47, 33, 46, 8])