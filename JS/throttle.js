function throttle(fn, delay = 500) {
    let timer = null
    return (...ages) => {
        if (timer) return // 如果timer存在，則不執行
        timer = setTimeout(() => {
            fn(...ages)
            timer = null
        }, delay)
    }
}
