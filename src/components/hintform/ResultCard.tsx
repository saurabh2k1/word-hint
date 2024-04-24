import React from "react"

interface ResultProps {
    wordList: string[];
}

export const ResultCard: React.FC<ResultProps> = ({wordList}) => {
    return (
        <div className="flex items-start  w-full bg-white border border-[#c4c4c4] shadow rounded-lg mobile:rounded-none mb-10 mobile:mt-5">
            {wordList.slice(1, 20).map((word) => {
                return (
                    <span key={word} className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{word.toUpperCase()}</span>
                );
            })}
        </div>
    );
}