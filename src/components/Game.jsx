
import React, { useContext } from 'react'
import image from '../assets/download.svg'
import { ModalContext } from './ModalContext'

const Game = ({data}) => {

  const isOpac = useContext(ModalContext)

  return (
    <div className={isOpac ? "main opac": "main"}>
        <div className="top">
            <p>word coach</p>
            <div className="more">
              <p>Learn new words</p>
            </div>
        </div>
        <div className="words">
            <p>which word is <i>opposite</i> of {data[0].word}?</p>
            <div className="box">
              <button>Adulthood</button>
              <p>or</p>
              <button>Neighborhood</button>
            </div>
        </div>
        <div className="level">
            <div><img src={image} alt="i" /></div>
            <div className="span">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>skip</p>
        </div>
    </div>
  )
}

export default Game