import React from 'react'

const Admin = () => {
    return (
        <div className='flex gap-20'>
            <div className='grid '>
                <div className='flex justify-start items-center  m-1 '>
                    <input type="text" className='border rounded-md p-1 m-2 text-center' />
                    <button className='bg-blue-600 rounded-lg text-white p-1 '>Add Batsman</button>
                </div>
                <div className='flex justify-start items-center m-1 '>
                    <input type="text" className='border rounded-md p-1 m-2 text-center' />
                    <button className='bg-blue-600 rounded-lg text-white p-1 '>Add Batsman</button>
                </div>
                <div className='flex justify-start items-center m-1 '>
                    <input type="text" className='border rounded-md p-1 m-2 text-center' />
                    <button className='bg-blue-600 rounded-lg text-white p-1 '>Add Bowler</button>
                </div>
            </div>
            <div className='items-center text-center'>Bastman
                <ul className='bg-sky-200 h-full px-10 underline w-full grid text-center font-mono'>
                    <li>Baber</li>
                </ul>
            </div>
            <div className='text-center'>
                Bowlers
                <ul className='bg-sky-200 h-full px-10 underline w-full grid text-center font-mono'>
                    <li>Baber</li>
                </ul>
            </div>
        </div>

    )
}

export default Admin