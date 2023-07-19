import React from 'react'
export const Stats =({initialItems, noOfPacked})=>{
    console.log("Init", noOfPacked, initialItems.length );
    console.log("Init type", typeof noOfPacked, typeof initialItems.length );
    const percentageOfPacked = Math.round((noOfPacked/(initialItems.length))*100);



    return(
        <footer className='stats'>
            <em>
            You have {initialItems.length} item(s) on your list and you have already packed {noOfPacked} ({isNaN(percentageOfPacked)?0:percentageOfPacked})%
            </em>
        </footer>
    )
}