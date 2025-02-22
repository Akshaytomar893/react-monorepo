import React, { useEffect, useState } from 'react';

interface props {
  cardCount: number;
  setIsGameStart: React.Dispatch<React.SetStateAction<boolean>>;
}
const Playground:React.FC<props> = ({cardCount, setIsGameStart}) => {

const [cardSet, setCardSet] = useState<{
    value:number,
    isVisible:boolean,
    isMatched:boolean
}[]>([])
const generateCardData= ()=>{
    const data = []
    let counter = 0
    let dataTracker: { [key: number]: number }  = {
    }
    console.log('sdfghj')
    for(let i =1;i<=cardCount; i++){
    console.log('sdfghj')
    dataTracker[i] = 0
    }
    while(counter < (2*cardCount)){
    console.log('sdfghj')

       const random =  Math.floor(Math.random() * cardCount) + 1;
       if(dataTracker[random] <2){
        counter+=1
        dataTracker[random] = dataTracker[random]+1
        data.push({value : random, isVisible:false, isMatched : false})
       }
    }
    return data
}
useEffect(()=>{
    const tempData = generateCardData();
    setCardSet(tempData)
    console.log(tempData)
}, [])
  return <div>dfghj</div>;
};

export default Playground;
