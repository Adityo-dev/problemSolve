// 11. Find Second Largest Number
{
  function FieldSecondLargestNumber(numbers: number[]): number {
    let largest = 0;
    let secondLargest = 0;

    for (const num of numbers) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num < largest && num > secondLargest) {
        secondLargest = num;
      }
    }
    return secondLargest;
  }

  const numbers = [10, 5, 8, 20, 15, 10];

  console.log(
    `Problem Number 11 ----------> ${FieldSecondLargestNumber(numbers)}`
  );
}

// 12. Reverse Words in a Sentence
{
  function ReverseWords(words: string): string {
    const reverseWords = words.trim().split(/\s+/).reverse().join(" ");
    return reverseWords;
  }

  const input = "I love JavaScript";
  console.log(`Problem Number 12 ----------> ${ReverseWords(input)}`);
}

// 13. Capitalize First Letter of Each Word
{
  function ReverseWords(words: string): string {
    const reverseWords = words.trim().split(/\s+/);

    const capitalizedWords = reverseWords.map((word) => {
      if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1);
      }
      return word;
    });
    return capitalizedWords.join(" ");
  }

  const input = "i love javaScript";
  console.log(`Problem Number 12 ----------> ${ReverseWords(input)}`);
}
