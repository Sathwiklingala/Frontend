class BasicProblems {
    // 1. Print Numbers in a Range
    static printNumbers(start, end) {
        let result = "";
        for (let i = start; i <= end; i++) {
            result += i + " ";
        }
        console.log(result.trim());
    }

    // 2. Sum of First N Natural Numbers
    static sumOfNaturalNumbers(N) {
        return (N * (N + 1)) / 2;
    }

    // 3. Reverse a String
    static reverseString(str) {
        return str.split('').reverse().join('');
    }

    // 4. Check Prime Number
    static isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // 5. Factorial of a Number
    static factorial(num) {
        let fact = 1;
        for (let i = 2; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }

    // 6. Print Fibonacci Series
    static printFibonacci(N) {
        let a = 0, b = 1, result = "";
        for (let i = 0; i < N; i++) {
            result += a + " ";
            [a, b] = [b, a + b];
        }
        console.log(result.trim());
    }

    // 7. Count Digits of a Number
    static countDigits(num) {
        return num.toString().length;
    }

    // 8. Reverse an Array
    static reverseArray(arr) {
        console.log(arr.reverse());
    }

    // 9. Sum of Digits of a Number
    static sumOfDigits(num) {
        return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }

    // 10. Count Vowels in a String
    static countVowels(str) {
        return (str.match(/[aeiou]/gi) || []).length;
    }

    // 11. Print Multiplication Table
    static printMultiplicationTable(num) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }
    }

    // 12. Find Largest Element in Array
    static findLargest(arr) {
        return Math.max(...arr);
    }

    // 13. Check Palindrome Number
    static isPalindrome(num) {
        let str = num.toString();
        return str === str.split('').reverse().join('');
    }

    // 14. Print Even Numbers in Array
    static printEvenNumbers(arr) {
        console.log(arr.filter(num => num % 2 === 0));
    }

    // 15. Find GCD of Two Numbers
    static findGCD(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }
}

// Test cases
BasicProblems.printNumbers(5, 10);
console.log(BasicProblems.sumOfNaturalNumbers(5));
console.log(BasicProblems.reverseString("hello"));
console.log(BasicProblems.isPrime(7));
console.log(BasicProblems.factorial(5));
BasicProblems.printFibonacci(7);
console.log(BasicProblems.countDigits(12345));
BasicProblems.reverseArray([1, 2, 3, 4, 5]);
console.log(BasicProblems.sumOfDigits(123));
console.log(BasicProblems.countVowels("javascript"));
BasicProblems.printMultiplicationTable(5);
console.log(BasicProblems.findLargest([3, 5, 7, 2, 8]));
console.log(BasicProblems.isPalindrome(121));
BasicProblems.printEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(BasicProblems.findGCD(12, 18));