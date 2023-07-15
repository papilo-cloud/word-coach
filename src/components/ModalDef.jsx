
import Speaker from './Speaker'
import image from '../assets/cross.svg'
import { useContext, useEffect, useState } from 'react'
import { ModalContext } from './ModalContext'

const ModalDef = ({audio, modalWord, showModal, setShowModal}) => {
    const {words, setAudio, setWords, setModalClose, modalClose} = useContext(ModalContext);
    
    function handleClick() {
        setShowModal(false)
        setWords(modalWord);
        setAudio(modalWord[0].phonetics[0].audio);
        setModalClose(true)
    }
    
  return (
    <>
        {modalWord.length > 0 && showModal &&
        <div className='modal'>
                <div className="inner">
                    <div className="tops">
                            <Speaker audio={audio} />
                            <p className='p'>{modalWord[0].word }</p>
                        <button className='button' onClick={() => setShowModal(false)}>
                            <img src={image} alt="cancel" />
                        </button>
                    </div>
                    <div className="body">
                        <p>{modalWord[0].meanings[0].definitions[0].definition}</p>
                        {modalWord[0].meanings[0].definitions[0].example &&<span className='usage'>"{words[0].meanings[0].definitions[0].example}"</span>}
                    </div>
                </div>
                <button className='btn'
                onClick={handleClick} >
                    <a href="#one">full definition</a>
                </button>
        </div>
    }
    </>
  )
}

export default ModalDef