import React, { useRef, useState, useEffect, useContext } from 'react'
import arrow from '../assets/down-arrow.svg'
import ModalDef from './ModalDef'
import { ModalContext } from './ModalContext'
import { motion } from "framer-motion";



const Similar = ({antonyms, synonyms}) => {
    const [isMore, setIsMore] = useState(true)
    const [br, setBr] = useState(false)
    const [dissimilar, setDissimilar] = useState(false)
    const [addMore, setAddMore] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [words, setWords] = useState([])
    const [audios, setAudios] = useState([])
    const [tooltip, setTooltip] = useState(true)

    let [more, setMore] = useState(10)
    var myRef = useRef(0)
    var modalRef = useRef()
    let {isOpac, setIsOpac} = useContext(ModalContext)
  
    useEffect(() => {
      let getHeight = myRef.current.clientHeight ;
      
      if (getHeight > 64 && isMore) {
        setAddMore(true);
        setMore(more - 1);
      }  
    },[more]);

    useEffect(() => {
      if (showModal) {
        document.body.style.overflow = 'hidden';
        setIsOpac(true)
      } else{
        document.body.style.overflow = 'unset';
        setIsOpac(false)
      }
      function getTarget(e) {
        if (!modalRef.current.contains(e.target)) {
          setShowModal(false)
        }
      }
      document.body.addEventListener('click', getTarget)
      
      return () => {document.body.style.overflow = 'hidden';
                    document.body.style.overflow = 'unset';
                    document.body.removeEventListener('click', getTarget)
    }
    }, [showModal])
    

    function handleChange() {
      if (isMore) {
        setMore(antonyms.length+synonyms.length)
        setIsMore(false)
        setBr(true)
        setDissimilar(true)
      } else{
        setIsMore(true)
      }
    }
    
    const fetchWord = async (url)=>{
      
      const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${url}`);
      const word = await data.json();
      setWords(word);
      const audUlr = word[0]?.phonetics[0]?.audio;
      setAudios(audUlr);
      if (word.title) {
        setTooltip(true)
        setTimeout(() => {
          setTooltip(false)
        }, 2000);
      } else{
        setShowModal(true)
      }
    }

  return (
    <div className='similar'>
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
        <div ref={modalRef}>
          <ModalDef setShowModal={setShowModal} showModal={showModal} audio={audios} modalWord={words} />
        </div>
    </div>
  )
}
export default Similar