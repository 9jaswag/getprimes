'use strict'

// find primes from 0 to integer n
function getPrimes (n) {
    // declare primes variable
    let primes = [];
    // handle primes
    if (!(Number.isInteger(n)) || Math.sign(n) == -1 || n == 0 || n == 1) {
        return "undefined";
    } else {
        for (let i = 2; i <= n; i++) {
            if(isPrime(i)) {
                primes.push(i);
            }
        }
        return primes
    }
}

// function to check if a number is a prime
function isPrime (n) {
    let limit = Math.sqrt(n);
    let prime = true;
    for (let i = 2; i <= limit; i++) {
        if (n%i == 0) {
            prime = false;
        }
    }
    return prime;
}

module.exports = {
    getPrimes: getPrimes
}