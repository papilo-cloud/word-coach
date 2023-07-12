import React, { useEffect, useRef, useState } from 'react'
import speaker from '../assets/speaker.svg'

const Speaker = ({audio}) => {
  const [tooltip, setTooltip] = useState(false)
  const [animate, setAnimate] = useState(false)

  const myRef = useRef(null)
  function handleClick() {

    if (audio) {
      myRef.current.play();
      setAnimate(true)
      setTimeout(() => {
        setAnimate(false)
      }, 2000);
    } else {
      setTooltip(true)
      setTimeout(() => {
        setTooltip(false)
      }, 2000);
    }
  }


    return (
    <div className={animate ? 'speaker animate': 'speaker'}>
      <div className="tooltip" style={{
        display:tooltip? 'block': 'none'
      }}>
        <span></span>
        <p>Not available</p>
      </div>
        <button onClick={handleClick}>
          <img src={speaker} alt="speaker" />
        </button>
        <audio ref={myRef}  src={audio}></audio>
    </div>
  )
}

export default Speaker