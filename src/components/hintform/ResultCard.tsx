import React from "react"

interface ResultProps {
    wordList: string[]
}
export const ResultCard: React.FC<ResultProps> = ({wordList}) => {
    return (
        <div className="w-full bg-white border border-[#c4c4c4] shadow rounded-lg mobile:rounded-none mb-10 mobile:mt-5">

        </div>
    );
}