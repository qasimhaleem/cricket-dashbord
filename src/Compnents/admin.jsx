import React from 'react'
import { useState } from 'react'
import Display from './Display';
const Admin = () => {
    const [bat1, setBat1] = useState("");
    const [currentBowl, setCurrentBowl] = useState([]);
    const [bowler, setBowler] = useState("");
    const [bowlList, setBowlList] = useState([]);
    const [batList, setBatList] = useState([]);
    const [totalRuns, setTotalRuns] = useState(0);
    const [totalWict, setTotalWict] = useState(0);
    const [bowls, setBowls] = useState(0)
    const [over, setOver] = useState(0)

    // handle batsman 
    const handleSubmit = () => {
        console.log("worings")
        setBat1("");
        setBatList(prevBat1 => prevBat1.concat(bat1))
    }
    // handle bowl submit
    const handleSubmitBowl = () => {
        console.log('woring');
        setBowler("");
        setBowlList(prevBowler => prevBowler.concat(bowler))
    }
    //handle current bowl
    const handleBowl = () => {
        if (currentBowl <= 7) {
            setTotalRuns(prevTotalRuns => Number(prevTotalRuns) + Number(currentBowl));
        }
        else if (currentBowl === 'wct') {
            setTotalWict(prevTotalWict => Number(prevTotalWict) + 1)
        }
        else if (currentBowl === 'wd') {
            setTotalRuns(prevTotalRuns => Number(prevTotalRuns) + 1);

        }
        else if (currentBowl > 7) {
            console.log("number is to large");
        }

        setBowls(prevBowls => {
            const newBowlValue = (prevBowls + 1);
            if (newBowlValue >= 6) {
                setOver(o => 0 + 1)
                return 0;
            }
            return newBowlValue;
        }
        )
        setCurrentBowl('');


    }
    return (
        <div className='flex gap-20'>
            <div className='grid '>
                <div className='flex justify-start items-center  m-1'>
                    <input type="text"
                        className='border rounded-md p-1 m-2 text-center'
                        value={bat1}
                        onChange={(e) => setBat1(e.target.value)}
                    />
                    <button className='bg-blue-600 rounded-lg text-white p-1'
                        onClick={handleSubmit}>Add Batsman</button>
                </div>
                <div className='flex justify-start items-center m-1 '>
                    <input type="text"
                        className='border rounded-md p-1 m-2 text-center'
                        value={bowler}
                        onChange={(e) => setBowler(e.target.value)
                        } />
                    <button className='bg-blue-600 rounded-lg text-white p-1' onClick={handleSubmitBowl}>Add Bowler</button>
                </div>
                <div className='flex justify-start items-center m-1 '>
                    <input type="text"
                        className='border rounded-md p-1 m-2 text-center'
                        value={currentBowl}
                        onChange={(e) => setCurrentBowl(e.target.value)} />
                    <button className='bg-blue-600 rounded-lg text-white p-1' onClick={handleBowl}>Current Bowl</button>
                </div>
            </div>
            <div className='items-center text-center'>Bastman
                <ul className='bg-sky-200 h-full px-10 underline w-full grid text-center font-mono'>
                    {batList.map((item, index) => (
                        <li key={index} >
                            {item}
                        </li>
                    ))
                    }
                </ul>
            </div>
            <div className='text-center'>
                Bowlers
                <ul className='bg-sky-200 h-full px-10 underline w-full grid text-center font-mono'>
                    {
                        bowlList.map((item, index) => (

                            <li key={index}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
            < Display runs={totalRuns} wict={totalWict} over={over} bowls={bowls} />
        </div>


    )

}

export default Admin