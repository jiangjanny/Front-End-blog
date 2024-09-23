// 手寫debounce
function debounce(fn, delay = 500) {
    let timer = null
    return (...ages) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...ages)
        }, delay)
    }
}
