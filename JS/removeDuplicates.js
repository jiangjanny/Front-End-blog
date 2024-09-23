let arr = [1, 9, 9, 8, 4, 4, 6, 7, 8, 2]

// function removeDuplicate(arr) {
//     return Array.from(new Set(arr))
// }

function removeDuplicate(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index).sort((a, b) => a - b)
}

console.log('removeDuplicate(arr)', removeDuplicate(arr))
