import { setMaxListeners } from 'events'
import React, { useState } from 'react'
interface props {
    cardCount:number,
    setCardCount: React.Dispatch<React.SetStateAction<number>>
    setIsGameStart:React.Dispatch<React.SetStateAction<boolean>>
}
const Play:React.FC<props> = ({cardCount, setCardCount, setIsGameStart}) => {
  return (
    <div style={{
        height:'100vh',
        width: '100vw',
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        gap:'1rem'
    }}>
      <label htmlFor="no_of_pairs" style={{
        fontSize:'2rem',
        fontFamily: 'fantasy'
      }}>Enter the Number of Pairs</label>
      <input style={{
        width: '200px',
        padding: '0.5rem',
        fontSize:'1.5rem',

        textAlign: 'center'
      }} onKeyDown={(e) => e.preventDefault()}  max={25} min={4} type="number" name='no_of_pairs' onChange={(e)=>setCardCount(parseInt(e.target.value))} value={cardCount}/>
      < button style={{
        backgroundColor: '#0f2144',
        color:'white',
        fontSize:'1rem',
        fontFamily: 'monospace',
        padding: '1rem',
        border:'2px solid black',
        borderRadius: '0.5rem'
      }} onClick={()=>setIsGameStart(true)}>Play Game</button>
    </div>
  )
}

export default Play
