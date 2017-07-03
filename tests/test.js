const assert = require('chai').assert;
const myApp = require('../src/getPrimes.js');

describe ('getPrimes', function(){

    describe('handle valid input', function(){
        it ('should return [2, 3, 5, 7] as prime of 7', function(){
            assert.deepEqual(myApp.getPrimes(7), [2, 3, 5, 7]);
        });
        it ('should return [2, 3, 5, 7, 11, 13, 17] as prime of 17', function(){
            assert.deepEqual(myApp.getPrimes(17), [2, 3, 5, 7, 11, 13, 17]);
        });
        it ('should return [2, 3, 5, 7, 11, 13, 17, 19, 23] as prime of 24', function(){
            assert.deepEqual(myApp.getPrimes(24), [2, 3, 5, 7, 11, 13, 17, 19, 23]);
        });
        it ('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61] as prime of 62', function(){
            assert.deepEqual(myApp.getPrimes(62), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61]);
        });
    })

    describe('handle invalid input', function(){
        it ('should return undefined as prime of 0', function(){
            assert.equal(myApp.getPrimes(0), 'undefined');
        });
        it ('should return undefined for 1', function(){
            assert.equal(myApp.getPrimes(1), 'undefined');
        });
        it ('should return undefined for -5', function(){
            assert.equal(myApp.getPrimes(-5), 'undefined');
        });
        it ('should return undefined for "string"', function(){
            assert.equal(myApp.getPrimes('string'), 'undefined');
        });
        it ('should return undefined for ""', function(){
            assert.equal(myApp.getPrimes(''), 'undefined');
        });
    })

})
