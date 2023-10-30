function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num) {
    for(let i = 2; i < num; i++){
        if(num % i === 0)
            return false;
    }
    return num > 1;
}

function fact(num) {
    if(num > 1)
        return num * fact(num - 1)
    else
        return 1;
}

module.exports = {
    avg,
    prime,
    fact
}
