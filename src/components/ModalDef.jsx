
import Speaker from './Speaker'
import image from '../assets/cross.svg'
import { useState } from 'react'

const ModalDef = ({audio, words, showModal, setShowModal}) => {
console.log(words)
    
  return (
    <>
        {words.length > 0 && showModal &&
        <div className='modal'>
                <div className="inner">
                    <div className="tops">
                            <Speaker audio={audio} />
                            <p className='p'>{words[0].word }</p>
                        <button className='button' onClick={() => setShowModal(false)}>
                            <img src={image} alt="cancel" />
                        </button>
                    </div>
                    <div className="body">
                        <p>{words[0].meanings[0].definitions[0].definition}</p>
                        {words[0].meanings[0].definitions[0].example &&<span className='usage'>"{words[0].meanings[0].definitions[0].example}"</span>}
                    </div>
                </div>
                <button className='btn'>full definition</button>
        </div>
    }
    </>
  )
}

export default ModalDef