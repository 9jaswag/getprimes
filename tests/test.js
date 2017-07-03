const assert = require('chai').assert;
const myApp = require('../src/getPrime.js');

describe ('getPrimes', function(){

    describe('handle valid input', function(){
        it ('should return [2, 3, 5, 7] as prime of 7', function(){
            assert.equal(myApp.getPrimes(7), [2, 3, 5, 7]);
        });
        it ('should return [2, 3, 5, 7, 11, 13, 17] as prime of 7', function(){
            assert.equal(myApp.getPrimes(17), [2, 3, 5, 7, 11, 13, 17]);
        });
    })

    describe('handle invalid input', function(){
        it ('should return undefined as prime of 0', function(){
            assert.equal(myApp.getPrimes(0), 'undefined');
        });
        it ('should return 1 is not a prime for 1', function(){
            assert.equal(myApp.getPrimes(1), '1 is not a prime');
        });
        it ('should return negative numbers do not have primes for -5', function(){
            assert.equal(myApp.getPrimes(-5), 'negative numbers do not have primes');
        });
        it ('should return only positive numbers allowed for "string"', function(){
            assert.equal(myApp.getPrimes('string'), 'only positive numbers allowed');
        });
        it ('should return only positive numbers allowed for ""', function(){
            assert.equal(myApp.getPrimes(''), 'only positive numbers allowed');
        });
    })

})
