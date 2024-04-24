import { useState } from 'react';
import { EmptyRow } from './EmptyRow';

interface RowProps {
    onUpdate: (cellValues: string[]) => void;
}

export const CorrectRow: React.FC<RowProps> = ({onUpdate}) => {
    
    const[cellValues, setCellValues] =useState<string[]>(['','','','','']);
    const [isEmpty, setIsEmpty] = useState(true);
    const [isError, setIsError] = useState<boolean | string>(false);
    const classes:string = "font-bold xxshort:w-9 xxshort:h-9 short:text-xl short:w-10 short:h-10 w-12 h-12 border-solid border-2 flex items-center justify-center mx-0.5 text-xl font-bold rounded dark:text-white text-center uppercase rounded box-border border-green-500 focus:border-green-700 focus:caret-green focus:ring-green";

    const handleCellChange = (value:string, index:number) => {
        if (cellValues.includes(value)) {
            console.log(value + " is already entered.");
            setIsError(value.toUpperCase() + " is already entered.");
        } else {
            setIsError(false);
            const newCellValues = [...cellValues];
            newCellValues[index] = value;
            const nonEmpty = newCellValues.filter(el => el);
            setIsEmpty(nonEmpty.length < 1);
            setCellValues(newCellValues);
            onUpdate(newCellValues);
        }
        
    }

    const handleClear = () => {
       const initialValues = ['','','','',''];
        setIsEmpty(true);
        setCellValues(initialValues);
        setIsError(false);
        onUpdate(initialValues);
    }
    return (
        <>
            <h3 className='mt-4 text-[16px] font-semibold'>
                🟩 Correct letters
            </h3>
            <p className='text-sm'>
                Letters in the word and in the correct position (green tiles)
            </p>
            {/* <EmptyRow onReset={() => ''} status='correct' /> */}
            <div className='relative min-w-max input mt-2'>
                <div className='flex gap-2'>
                    {cellValues.map((value, i) => (
                        <input type="text" 
                            key={i}
                            data-id={i} 
                            maxLength={1} 
                            placeholder=" "
                            className= {classes}
                            value={value}
                            onChange={(e) => handleCellChange(e.target.value, i)}
                        />  
                    ))}
                </div>
                {!isEmpty && (
                        <div className="text-right">Values: {cellValues.join(', ')} 
                        {isError && (<div className='text-right text-red-500'>{isError}</div>)}
                        <button className="clear-all-link !pr-0" onClick={handleClear } >
                            Clear all
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}