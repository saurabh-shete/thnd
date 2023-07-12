import React, { useState } from 'react'
import MorePrompts from './MorePrompts'

const MainContainer = ({ handleChange }) => {
  const [showPrompts, setShowPrompts] = useState(false)
  return (
    <div className='mt-4 mx-4 h-screen w-full lg:w-[75%] lg:container lg:mx-auto '>
      <div className='flex justify-center'>
        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm p-1.5 text-center mr-2 mb-2 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5  h-5">
            <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
            <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
          </svg>
          <span className='font-semibold'>Ask AI</span>
        </button>
        <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-500 hover:bg-gradient-to-br focus:ring-0 focus:outline-none focus:ring-transparent dark:focus:ring-green-800 font-medium rounded-lg text-sm p-1.5 text-center mr-2 mb-2 flex justify-center items-center" onClick={handleChange} >
          <span className='text-xl font-semibold text-white'>⌨</span>
        </button>
      </div>
      <div className='container mt-2 mx-auto'>
        <h1 class="text-lg text-gray-800 text-center">Few examples to ask!</h1>
        <div>
          {!showPrompts && <>
            {/* Prompts */}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
              <button type="button" className="border-2 border-gray-100 text-gray-800 bg-gray-50 hover:bg-gray-100  font-medium rounded-lg text-sm p-2 flex justify-center items-center duration-200">
                <span className="font-semibold">What is the weather today?</span>
              </button>
              <button type="button" className="border-2 border-gray-100 text-gray-800 bg-gray-50 hover:bg-gray-100 font-medium rounded-lg text-sm p-2 flex justify-center items-center duration-200">
                <span className="font-semibold">What is the weather tomorrow?</span>
              </button>
              <button type="button" className="border-2 border-gray-100 text-gray-800 bg-gray-50 hover:bg-gray-100 font-medium rounded-lg text-sm p-2 flex justify-center items-center duration-200">
                <span className="font-semibold">What is the weather in London?</span>
              </button>
              <button type="button" className="border-2 border-gray-100 text-gray-800 bg-gray-50 hover:bg-gray-100  font-medium rounded-lg text-sm p-2 flex justify-center items-center duration-200">
                <span className="font-semibold">What is the weather in London?</span>
              </button>
            </div>
            {/* More Examples Button  */}
            <div className='w-full mt-5'>
              <span className='flex justify-center items-center gap-1 text-green-900 cursor-pointer'
                onClick={() => { setShowPrompts(true) }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" /> </svg> More Examples</span>
            </div></>
          }
          {/* More Prompts */}
          {showPrompts && <MorePrompts />}

        </div>
      </div>
    </div>
  )
}

export default MainContainer