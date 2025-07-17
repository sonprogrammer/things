import React from 'react'

interface PriceBtnProps {
    fee?: string
}
const PriceBtn = ({ fee }: PriceBtnProps) => {


    const handleChange = () => {
        if(fee){
            
        }
    }
    
    return (
        <div>
            <div className='flex gap-4'>
                <div className="flex rounded-full overflow-hidden border border-gray-300 w-full">
                    <input
                        type="number"
                        // TODO onchange도 만들어줘야함
                        value={fee}
                        // readOnly={!!fee}
                        placeholder="0"
                        className="w-full text-right bg-blue-50 px-4 py-2 focus:outline-none appearance-none
                 [&::-webkit-inner-spin-button]:appearance-none 
                 [&::-webkit-outer-spin-button]:appearance-none 
                 [appearance:textfield]"
                    />
                    <div className="px-3 flex items-center text-sm text-gray-600 bg-white border-l border-gray-300">
                        {fee ? '%' : 'KRW'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceBtn
