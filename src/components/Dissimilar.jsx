
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import arrow from '../assets/down-arrow.svg'

const syn = [{word: 'brother', synonyms:['one','two','three', 'four', 'five'], antonyms: 
['one','two','three', 'four', 'five','six','seven']}
]
const Disimilar = () => {
    const [isMore, setIsMore] = useState(true)
    // const [antonyms ,setAntonyms] = useState([])
    let [more, setMore] = useState(10)
    var myRef = useRef(0)
    useEffect(() => {
      let getHeight = myRef.current.clientHeight    
      if (getHeight > 64 && isMore) {
        setMore(more - 1)
      }  
    },[more])

  return (
    <>
        <div className="butn" ref={myRef}>
            <span>Dissimilar:</span> {syn[0].antonyms.slice(0,more).map((idx, x) => <button key={x} >{idx}</button> )}
            <button 
            className='arrow'
            onClick={() => {setMore(syn[0].antonyms.length); setIsMore(!isMore)}}><img src={arrow} alt="down-arrow" /></button>
        </div>
    </>
  )
}

export default Disimilar