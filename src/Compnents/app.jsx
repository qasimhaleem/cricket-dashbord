import React from 'react'
import Admin from './admin';
import Display from './Display';
import { useState, useEffect } from 'react';

const App = () => {
    const [currentBowl, setCurrentBowl] = useState()
    return (
        <>
            <div className='flex justify-center items-center bg-sky-200 p-3 font-md text-2xl'>Qasim's  Creation
            </div>
            <Admin />
            {/*  <Display /> */}
            <div className='grid mt-2 justify-around items-center bg-violet-800 text-white font-semibold mx-120 rounded-lg px-10'>
                <div className='flex gap-2' >
                    <h5 className='underline'>Imad  </h5>
                    <h5>0 o</h5>
                </div>
                <div className=' flex gap-2'>
                    <h6 className='underline'>This over</h6>
                    <h5>0,0,2,0,6,w</h5>
                </div>
            </div>
        </>
    )
}

export default App;