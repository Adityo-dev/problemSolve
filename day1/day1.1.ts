// 1. Reverse a String
{
  function ReverseAString(value: string): string {
    const arr = value.split("");
    arr.reverse();
    const reversedValue = arr.join("");
    return reversedValue;
  }

  console.log(`Problem Number 1 ----------> ${ReverseAString("hello")}`);
}

// 2. Count Vowels
{
  function CountVowel(value: string): number {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let char of value) {
      if (vowels.includes(char)) {
        count++;
      }
    }

    return count;
  }

  console.log(`Problem Number 2 ----------> ${CountVowel("hello")}`);
}

// 3. Find Largest Number
{
  function FindLargestNumber(numbers: number[]): number {
    let largestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      if (largestNumber < numbers[i]) {
        largestNumber = numbers[i];
      }
    }
    return largestNumber;
  }

  const numberArray = [12, 55, 3, 99, 27];
  console.log(`Problem Number 3 ----------> ${FindLargestNumber(numberArray)}`);
}

// 4. Sum of Arrays
{
  function SumOFArray(numbers: number[]): number {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }

  const numbers = [1, 2, 3, 4, 5];
  console.log(`Problem Number 4 ----------> ${SumOFArray(numbers)}`);
}

// 5. Palindrome Check
{
  function PalindromeCheck(value: string): boolean {
    const reversed = value.split("").reverse().join("");
    return value === reversed;
  }

  console.log(`Problem Number 5 ----------> ${PalindromeCheck("level")}`);
}

// 6. Remove Duplicates from Array
{
  function RemoveDuplicates(values: number[]): number[] {
    const newValues: number[] = [];

    for (let i of values) {
      if (!newValues.includes(i)) {
        newValues.push(i);
      }
    }

    return newValues;
  }

  const input = [1, 2, 2, 3, 4, 4, 5];
  console.log(`Problem Number 6 ---------->`, RemoveDuplicates(input));
}

// 7. FizzBuzz Problem
{
  function CheckFizzBuzz(value: number): void {
    for (let i = 0; i <= value; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  CheckFizzBuzz(5);
}

// 8. Factorial of a Number
{
  function Factorial(number: number): number {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }

  console.log(`Problem Number 8 ----------> ${Factorial(5)}`);
}

// 9. Find Even Numbers
{
  function FindEvenNumbers(numbers: number[]): number[] {
    let evenNumbers: number[] = [];
    for (let i of numbers) {
      if (i % 2 === 0) {
        evenNumbers.push(i);
      }
    }
    return evenNumbers;
  }

  const numbers = [1, 2, 3, 4, 5, 6];
  console.log(`Problem Number 9 ----------> ${FindEvenNumbers(numbers)}`);
}

// 10. Count Words in a Sentence
{
  function CountWords(value: string): number {
    return value.trim().split(/\s+/).length;
  }

  console.log(
    `Problem Number 10 ----------> ${CountWords("I am learning JavaScript")}`
  );
}
