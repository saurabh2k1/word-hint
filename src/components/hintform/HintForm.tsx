import { FormEvent, useState } from "react"
import { CorrectRow, MisplacedRow, ExcludedRow } from "../Grid"
import { findWord, findWordsWithLettersAtPositions, getNonEmptyValuesAndIndices } from "../../lib/words";
import { WORDS } from "../../constant/wordlist";
import { ResultCard } from "./ResultCard";

export const HintForm = () => {
    const [correctLetters, setCorrectLetters] = useState<string[]>([]);
    const [misplacedLetters, setMisplacedLetters] = useState<string[]>([]);
    const [excludedLetters, setExcludedLetters] = useState<string>('');

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        // console.log('Corrected Letter', correctLetters);
        // console.log('Misplaced Letter', misplacedLetters);
        console.log(findWord(WORDS,correctLetters));
        // const correctgroup = getNonEmptyValuesAndIndices(correctLetters);
        // const filteredWords: string[] = findWordsWithLettersAtPositions(WORDS, correctgroup );
        // console.log('Corrected group:',correctgroup);
        // console.log('Filtered Words:',filteredWords);
    }

    const handleCorrectRowUpdate = (cellValues: string[]) => {
        setCorrectLetters(cellValues);
    }

    const handleMisplaceRowUpdate = (cellValues: string[]) => {
        setMisplacedLetters(cellValues);
    }

    const handleExcludedRowUpdate = (cellValue: string) => {
        setExcludedLetters(cellValue);
    }

    return (
        <form onSubmit={handleSubmit}>
          <div className='max-w-[390px] mx-auto mobile:mt-5'>
            <div className='bg-white rounded-lg shadow-lg p-6 mobile:p-4'>
              <div className='min-h-[346px]'>
                <div className='flex flex-col w-[274px] text-left mx-auto'>
                  <CorrectRow onUpdate={handleCorrectRowUpdate} />
                  <MisplacedRow onUpdate={handleMisplaceRowUpdate} />
                  <ExcludedRow onUpdate={handleExcludedRowUpdate} />
                </div>
              </div>
              <button type='submit' className='rounded-3xl outline-none focus:outline-none bg-[#f7c342] mt-4 mx-auto py-4 block w-full max-w-[310px] text-gray-700 text-[18px] leading-[22px] border-gray '>
                <span className='justify-self-center font-bold'>Search</span>
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 mobile:p-4 m-2">
              <p>Correct Letters: {correctLetters}</p>
              <p>Misplaced Letters: {misplacedLetters}</p>
            </div>
            <ResultCard  wordList={findWord(WORDS,correctLetters)} />
          </div>
        </form>
    )
}