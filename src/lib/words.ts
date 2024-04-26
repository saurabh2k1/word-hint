import GraphemeSplitter from "grapheme-splitter";
export const wordSplit = (word: string) => {
  return new GraphemeSplitter().splitGraphemes(word);
};

// export const findWordsWithLettersAtPositions = (
//   wordList: string[],
//   filterList: { values: string[]; indices: number[] }
// ): string[] => {
//   const { values, indices } = filterList;
//   // Ensure indices and values have the same length
//   if (indices.length !== values.length) {
//     throw new Error("indices and values arrays must have the same length");
//   }

//   // Filter the word list based on the condition
//   const result: string[] = wordList.filter((word) => {
//     for (let i = 0; i < indices.length; i++) {
//       const position = indices[i];
//       const targetLetter = values[i];
//       console.log("word:", word);
//       if (
//         word.length >= position &&
//         word[position - 1].toUpperCase() !== targetLetter.toUpperCase()
//       ) {
//         return false;
//       }
//     }
//     console.log("");
//     return true;
//   });

//   return result;
// };

// export const getNonEmptyValuesAndIndices = (
//   arr: string[]
// ): { values: string[]; indices: number[] } => {
//   const nonEmptyValues = arr.filter((value) => value !== "");
//   const indices = arr
//     .map((_, index) => index)
//     .filter((index) => arr[index] !== "");
//   return { values: nonEmptyValues, indices: indices };
// };

export const findWord = (
  wordList: string[],
  correctWords: string[],
  misplacedWords: string[] = [],
  excludedWords: string = ""
): string[] => {
  const result: string[] = wordList.filter((word) => {
    if (excludedWords) {
      for (let i = 0; i < excludedWords.length; i++) {
        if (word.includes(excludedWords[i])) {
          return false;
        }
      }
    }

    const wArray = wordSplit(word);
    let dTrue = true;

    for (let i = 0; i < correctWords.length; i++) {
      if (correctWords[i] !== "" && wArray[i] !== correctWords[i]) {
        dTrue = false;
      }
    }
    if (misplacedWords.length > 0) {
      misplacedWords.forEach((mWord, index) => {
        if (!word.includes(mWord)) {
          dTrue = false;
        }
      });
    }

    return dTrue;
  });
  return result;
};
