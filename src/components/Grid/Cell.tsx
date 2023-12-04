import classNames from "classnames"

type Props = {
    value?: string
    position?: number
}

export const Cell = ({
    value,
    position = 0,
}: Props) => {

    const classes = classNames(
        "font-bold text-center uppercase rounded box-border  w-11",
        {
            "border-solid border-[1px] border-green-500 focus:outline-none focus:border-[1px] focus:border-green-500 focus:caret-[#005a9c] is-empty border-green-500" : !value,
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