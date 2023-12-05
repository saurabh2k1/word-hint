import { LetterStatus } from "@/lib/statuses"
import classNames from "classnames"

type Props = {
    value?: string
    status?: LetterStatus
    position?: number
}

export const Cell = ({
    value,
    status,
    position = 1,
}: Props) => {

    const classes = classNames(
        "font-bold xxshort:w-9 xxshort:h-9 short:text-xl short:w-10 short:h-10 w-12 h-12 border-solid border-2 flex items-center justify-center mx-0.5 text-2xl font-bold rounded dark:text-white text-center uppercase rounded box-border",
        {
            "border-green-500 focus:border-green-700 focus:caret-green focus:ring-green": status === 'correct',
            "border-yellow-500 focus:border-yellow-700 focus:caret-yellow focus:ring-yellow": status === 'wrong',
            "is-empty" : !value,
        }
    )

    return (
        <input type="text" 
            data-id={position} 
            maxLength={1} 
            placeholder=" "
            className={classes}
            value={value}
        />  
    );
}