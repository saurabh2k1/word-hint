
export const ExcludedRow = () => {
    return (
        <>
        <h3 className='mt-4 text-[16px] font-semibold'>
            ⬛ Excluded Letters
        </h3>
        <p className='text-sm'>
            Letters not in the word in any spot (dark grey tiles)
        </p>
        <div className='relative mt-2'>
            <input id='exclude_letters' className='w-full-1 leading-[1.875rem] rounded-lg py-2 px-2 focus:outline-none font-bold text-[16px] uppercase border border-grey bg-[#F4F4F4] focus:bg-[#ffffff] placeholder-shown:bg-[#ffffff] rounded-lg' />
        </div>
        </>
                
    )
}