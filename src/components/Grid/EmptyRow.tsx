import { Cell } from "./Cell"
import { LetterStatus } from "@/lib/statuses"

type Props = {
    status?: LetterStatus
}

export const EmptyRow = ({
    status
}:Props) => {
    const emptyCells = Array.from(Array(5))
    return (
        <div className='relative min-w-max input mt-2'>
            <div className='flex gap-2'>
                {emptyCells.map((_, i) => (
                    <Cell key={i} status={status} position={i+1} />
                ))}
            </div>
        </div>
    )
}