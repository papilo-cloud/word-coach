import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react'
import arrow from '../assets/down-arrow.svg'



const Similar = ({antonyms}) => {
    const [isMore, setIsMore] = useState(true)
    let [more, setMore] = useState(10)
    var myRef = useRef(0)

    const syn = [{word: 'brother', synonyms:['one','two','three', 'four', 'five','six','seven'], antonyms: 
['one','two','three', 'four', 'five','six','seven']}
]
  
    useEffect(() => {
      let getHeight = myRef.current.clientHeight    
      if (getHeight > 64 && isMore) {
        setMore(more - 1)
      }  
    },[more])

  return (
    <>
        <div className="butn" ref={myRef}>
            <span>Similar:</span> {syn[0].synonyms.slice(0,more).map((idx, x) => <button key={x} >{idx}</button> )}
            <button 
            className='arrow'
            onClick={() => {setMore(syn[0].synonyms.length); setIsMore(!isMore)}}><img src={arrow} alt="down-arrow" 
            /></button>
        </div>
    </>
  )
}
export default Similar