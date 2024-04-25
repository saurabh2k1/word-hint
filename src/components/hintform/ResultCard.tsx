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
        const nextWords = words.slice(nextIndex, nextIndex + 10);
        setDisplayedWords([...displayedWords, ...nextWords ]);
    }

    useEffect(() => {
        setWords(wordList);
        setDisplayedWords(wordList.slice(0, 20));
    }, [wordList])

    return (
        <div className='relative bg-white rounded-lg shadow-lg p-4 mobile:p-4'>
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">Suggested Words</h3>
            </div>
            
            <div className='grid grid-cols-4 gap-2 mx-auto'>
            {displayedWords.map((word, index) => {
                return (
                    <span key={index} className="bg-blue-100 text-blue-800 text-ms font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{word.toUpperCase()}</span>
                );
            })}
            </div>
            <div className="px-6 py-4 w-full">
            <button
                type="submit"
                onClick={handleMore}
            className="right-0 bg-blue-500 mt-3 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                More ..
            </button>
            </div>
        </div>
    );
}