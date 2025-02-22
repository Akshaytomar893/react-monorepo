import React, { useState } from 'react'
import Play from '../components/Play'
import Playground from '../components/Playground'

const HomeSceen = () => {
    const [cardCount, setCardCount] = useState<number>(10)
    const [isGameStart, setIsGameStart] = useState<boolean>(false)

  return (
    <div>
      {/* <Play cardCount={cardCount} setCardCount={setCardCount} setIsGameStart={setIsGameStart}/> */}
      <Playground cardCount={cardCount} setIsGameStart={setIsGameStart}/>
    </div>
  )
}

export default HomeSceen
