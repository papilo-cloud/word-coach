
import React, { useEffect, useRef, useState } from 'react'
import speaker from '../assets/speaker.svg'
import arrow from '../assets/down-arrow.svg'

const WordDefinition = ({def1, def1usage, def2, def2usage, id,syn,word,ord,pronon,posp}) => {

    const [isMore, setIsMore] = useState(true)
    let [more, setMore] = useState(10)
    var myRef = useRef(0)
  
    useEffect(() => {
      // axios.get(`${baseUrl1}`).then(response => setCount(response.data));
      let getHeight = myRef.current.clientHeight    
  
      if (getHeight > 64 && isMore) {
        setMore(more - 1)
      }  
    },[more])

    return (
    <div key={id} className="def">
            <div className="meaning">
              <div className="speaker">
              <img src={speaker} alt="speaker" />
              </div>
              <p>{word} <br /><span>/{pronon}/</span></p>
            </div>
            <div className="definition">
              <div>
                <span><i>{posp} </i></span>
                <div className="pad">
                    <p>{def1} </p>
                    <p className='usage'>"{def1usage}"</p>
                    <div className="butn" ref={myRef}>
                        <span>Similar:</span> {syn.slice(0,more).map((idx, x) => <button key={x} >{idx}</button> )}
                        <button 
                        className='arrow'
                        onClick={() => {setMore(syn.length); setIsMore(!isMore)}}><img src={arrow} alt="down-arrow" /></button>
                    </div>
                    <ul>
                        <li>{def2} <br />
                            <span className='usage'>"{def2usage}"</span> 
                        </li>
                    </ul>
                </div>
              </div> 
            </div>
          </div>
  )
}

export default WordDefinition