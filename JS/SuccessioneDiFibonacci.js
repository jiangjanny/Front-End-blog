// JavaScript 費氏數列 – 遞迴解
// Time complexity = O(2^n)
function fib1(n) {
    if (n < 2) {
        return n
    }

    return fib1(n - 1) + fib1(n - 2)
}

console.log('fib1', fib1(10))

// JavaScript 費氏數列 – 迴圈解

function fib2(n) {
    const arr = [0, 1]
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n]
}

console.log('fib2', fib2(20))
