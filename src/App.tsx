import React from 'react';

import './App.css';
import Div100vh from 'react-div-100vh';
import { Navbar } from './components/navbar/Navbar';
import { Cell } from './components/Grid/Cell';
import { EmptyRow } from './components/Grid/EmptyRow';

function App() {
  return (
    <Div100vh>
      <div className='flex h-full flex-col'>
        <Navbar />
        <form>
          <div className='max-w-[390px] mx-auto mobile:mt-5'>
            <div className='bg-white rounded-lg shadow-lg p-6 mobile:p-4'>
              <div className='min-h-[346px]'>
                <div className='flex flex-col w-[274px] text-left mx-auto'>
                  <h3 className='mt-4 text-[16px] font-semibold'>
                  🟩 Correct letters
                  </h3>
                  <p className='text-sm'>
                    Letters in the word and in the correct position (green tiles)
                  </p>
                  <EmptyRow status='correct' />
                  <h3 className='mt-4 text-[16px] font-semibold'>
                  🟨 Misplaced Letters
                  </h3>
                  <p className='text-sm'>
                    Letters in the word but in the wrong position (yellow tiles)
                  </p>
                  <EmptyRow status='wrong' />
                  <h3 className='mt-4 text-[16px] font-semibold'>
                  ⬛ Excluded Letters
                  </h3>
                  <p className='text-sm'>
                    Letters not in the word in any spot (dark grey tiles)
                  </p>
                  <div className='relative mt-2'>
                    <input id='exclude_letters' className='w-full-1 leading-[1.875rem] rounded-lg py-2 px-2 focus:outline-none font-bold text-[16px] uppercase border border-grey bg-[#F4F4F4] focus:bg-[#ffffff] placeholder-shown:bg-[#ffffff] rounded-lg' />
                  </div>
                  
                </div>
              </div>
              <button type='submit' className='leading-none rounded-3xl outline-none focus:outline-none bg-[#f7c342] mt-4 mx-auto py-4 block w-full max-w-[310px] text-gray-700 text-[18px] leading-[22px] border-gray '>
                <span className='justify-self-center font-bold'>Search</span>
              </button>
            </div>
          </div>
        </form>
        
        
        
      </div>
    </Div100vh>
  );
}

export default App;
