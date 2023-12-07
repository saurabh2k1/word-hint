function findWordsWithLettersAtPositions(
    wordList: string[],
    positions: number[],
    targetLetters: string[]
  ): string[] {
    // Ensure positions and targetLetters have the same length
    if (positions.length !== targetLetters.length) {
      throw new Error("Positions and targetLetters arrays must have the same length");
    }
  
    // Filter the word list based on the condition
    const result: string[] = wordList.filter((word) => {
      for (let i = 0; i < positions.length; i++) {
        const position = positions[i];
        const targetLetter = targetLetters[i];
  
        if (
          word.length < position ||
          word.charCodeAt(position - 1) !== targetLetter.toUpperCase().charCodeAt(0)
        ) {
          return false;
        }
      }
      return true;
    });
  
    return result;
  }
  
  // Example usage:
  const words: string[] = ["apple", "banana", "melon", "orange", "plum"];
  const positions: number[] = [2, 4]; // specify the positions (indices) of the letters
  const targetLetters: string[] = ["M", "G"]; // specify the target letters
  
  const wordsWithLettersAtPositions: string[] = findWordsWithLettersAtPositions(
    words,
    positions,
    targetLetters
  );
  
  console.log(wordsWithLettersAtPositions);
  export {}