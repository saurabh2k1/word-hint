import { useEffect, useState } from "react"
import { Cell } from "./Cell"
import { LetterStatus } from "@/lib/statuses"

type Props = {
    status?: LetterStatus
    onReset: () => void;
}

export const EmptyRow: React.FC<Props> = ({
    status,
    onReset
}) => {

    const[cellValues, setCellValues] =useState<string[]>(['','','','','']);
    
    // const emptyCells = Array.from(Array(5));
    // const [inputValues, setInputValues ] = useState<string[]>(['','','','','']);
    const [isEmpty, setIsEmpty] = useState(true);
    
    useEffect(() => {
        const newInputValues = cellValues.map((value) => value);
        // setInputValues(newInputValues);
    }, [cellValues]);
    
   
    const handleCellChange = (value:string, index:number) => {
        const newCellValues = [...cellValues];
        newCellValues[index] = value;
        const nonEmpty = newCellValues.filter(el => el);
        setIsEmpty(nonEmpty.length < 1);
        setCellValues(newCellValues);
        
    }

    const handleClear = () => {
        setCellValues(['','','','','']);
        // setInputValues(['','','','','']);
        onReset();
    }
    return (
        <div className='relative min-w-max input mt-2'>
            <div className='flex gap-2'>
                {cellValues.map((value, i) => (
                    <Cell value={value} key={i} status={status} position={i+1} onChange={(newValue) => handleCellChange(newValue, i)} />
                ))}
            </div>
            {!isEmpty && (<div className="text-right">Values: {cellValues.join(', ')} <button className="clear-all-link !pr-0" onClick={handleClear } >Clear all</button></div>)}
        </div>
    )
}