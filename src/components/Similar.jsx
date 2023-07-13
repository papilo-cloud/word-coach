import React, { useRef, useState, useEffect } from 'react'
import arrow from '../assets/down-arrow.svg'
import ModalDef from './ModalDef'



const Similar = ({antonyms, synonyms}) => {
    const [isMore, setIsMore] = useState(true)
    const [br, setBr] = useState(false)
    const [dissimilar, setDissimilar] = useState(false)
    const [moreSearch, setMoreSearch] = useState()
    const [addMore, setAddMore] = useState(false)
    const [words, setWords] = useState([])
    const [audios, setAudios] = useState([])

    let [more, setMore] = useState(10)
    var myRef = useRef(0)
  
    useEffect(() => {
      let getHeight = myRef.current.clientHeight ;
      if (getHeight > 64 && isMore) {
        setAddMore(true);
        setMore(more - 1);
      }  
    },[more])

    function handleChange() {
      if (isMore) {
        setMore(antonyms.length+synonyms.length)
        setIsMore(!isMore)
        setBr(true)
        setDissimilar(true)
      } 
    }
   
 
    
    const fetchWord = async (url)=>{
      
      const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${url}`);
      const word = await data.json();
      setWords(word);
      const audUlr = word[0].phonetics[0].audio
      setAudios(audUlr)
      // console.log(word)
    }

  return (
    <>
        <div className="butn" ref={myRef}>
            <>
              {synonyms.length > 0 && antonyms.length > 0 ? <>
                <span>Similar:</span> {synonyms.slice(0,more).map((idx, x) => 
                <button onClick={() => fetchWord(idx)} key={x} >{idx}</button> )} {br&& <br /> }
                {dissimilar && <><span className='diss'>Dissimilar:</span> {antonyms.slice(0,more).map((idx, x) => 
                <button onClick={() => fetchWord(idx)} key={x} >{idx}</button> )}</>}  
              </> : synonyms.length > 0 && antonyms.length == 0? <>
                <span>Similar:</span> {synonyms.slice(0,more).map((idx, x) => 
                <button onClick={() => fetchWord(idx)} key={x} >{idx}</button> )}
              </>  : synonyms.length == 0 && antonyms.length > 0? <>
                <span className='diss'>Dissimilar:</span> {antonyms.slice(0,more).map((idx, x) => 
                <button onClick={() => fetchWord(idx)} key={x} >{idx}</button> )}
              </>: ''
              }
            </>
            {
              addMore && <button 
              className='arrow'
              onClick={handleChange}>
                <img src={arrow} alt="down-arrow" 
                  style={{
                    transform: !isMore? 'rotateX(180deg)': ''
                  }} />
            </button>
            }
        </div>
        <ModalDef audio={audios} words={words} />
    </>
  )
}
export default Similar