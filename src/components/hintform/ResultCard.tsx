import { wordSplit } from "@/lib/words";
import React, { useEffect, useState } from "react"

interface ResultProps {
    wordList: string[];
}

export const ResultCard: React.FC<ResultProps> = ({wordList}) => {
    const [words, setWords] = useState<string[]>(wordList);
    const [displayedWords, setDisplayedWords] = useState<string[]>(wordList.slice(0, 20));

    const handleMore = () => {
        const nextIndex = displayedWords.length;
        const nextWords = words.slice(nextIndex, nextIndex + 20);
        setDisplayedWords([...displayedWords, ...nextWords ]);
    }

    useEffect(() => {
        console.log("words: ", wordList);
        setWords(wordList);
        setDisplayedWords(wordList.slice(0, 20));
    }, [wordList])

    return (
        <div className='w-full bg-white shadow-lg rounded-lg mobile:rounded-none overflow-hidden mb-10 mobile:mt-5'>
            <div className="z-10 bg-lime-800 rounded-t-lg text-white font-bold px-10 mobile:px-4 py-2">
                <div className="flex justify-between items-center text-2xl mobile:text-xl">
                    <h3 className="font-bold text-xl mb-2 mobile:leading-[25px]">Suggested Words</h3>
                </div>
            </div>
            
            <div className='py-5 px-10 mobile:px-[15px]'>
                <div className="flex flex-wrap">
            {displayedWords.map((word, index) => {
                return (
                    <button key={index} className="bg-blue-100 text-blue-800 text-ms font-medium m-2 p-2 rounded dark:bg-blue-900 dark:text-blue-300">{word.toUpperCase()}</button>
                );
            })}
            </div>
            </div>
            {words.length > 20 && 
            <div className="flex justify-center mt-[18px] mb-4">
            <button
                type="submit"
                onClick={handleMore}
            className="leading-none rounded-lg outline-none focus:outline-none gold-button bg-[#f7c342] p-[0.625rem] ">
                More ..
            </button>
            </div>}
        </div>
    );
}