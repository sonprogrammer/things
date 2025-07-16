import React from 'react'

const PriceBtn = () => {
    return (
        <div>
            <div className='flex gap-4'>
                <div className="flex rounded-full overflow-hidden border border-gray-300 w-full">
                    <input
                        type="number"
                        // value={0}
                        placeholder="0"
                        className="w-full text-right bg-blue-50 px-4 py-2 focus:outline-none appearance-none
                 [&::-webkit-inner-spin-button]:appearance-none 
                 [&::-webkit-outer-spin-button]:appearance-none 
                 [appearance:textfield]"
                    />
                    <div className="px-3 flex items-center text-sm text-gray-600 bg-white border-l border-gray-300">
                        KRW
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceBtn
