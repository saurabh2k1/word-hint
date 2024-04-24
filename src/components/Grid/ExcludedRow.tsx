import React, { useState } from "react"

interface RowProps {
    onUpdate: (cellValues: string) => void;
}

export const ExcludedRow: React.FC<RowProps> = ({onUpdate}) => {

    const [cellValues, setCellValues] = useState<string>('');

    const handleCellChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        if (newValue.length > 1 &&  cellValues.includes(newValue.slice(-1))) {
            // If duplicate, don't update the state
            return;
        }
        setCellValues(newValue);
        onUpdate(newValue);
    }

    const handleClear = () => {
        setCellValues('');
    }

    

    return (
        <>
        <h3 className='mt-4 text-[16px] font-semibold'>
            ⬛ Excluded Letters
        </h3>
        <p className='text-sm'>
            Letters not in the word in any spot (dark grey tiles)
        </p>
        <div className='relative min-w-max mt-2'>
            <input 
                id='exclude_letters' 
                value={cellValues}
                onChange={ handleCellChange}
                className='w-full-1 leading-[1.875rem] py-2 px-2 focus:outline-none font-bold text-[16px] uppercase border border-grey bg-[#F4F4F4] focus:bg-[#ffffff] placeholder-shown:bg-[#ffffff] rounded-lg' />
            </div>
            {cellValues && (
                <div className="text-right">
                    <button className="clear-all-link !pr-0" onClick={handleClear } >
                        Clear all
                    </button>
                </div>
            )}
        </>
                
    )
}