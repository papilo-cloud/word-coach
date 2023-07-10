
import React from 'react'

const Game = (props) => {
    // console.log(props)
  return (
    <div className="main">
        <div className="top">
            <p>word coach</p>
            <div className="score">
              <p>score</p>
              <span></span>
              <p>360</p>
            </div>
        </div>
        <div className="words">
            <p>which word is <i>opposite</i> of youth?</p>
            <div className="box">
              <button>Adulthood</button>
              <p>or</p>
              <button>Neighborhood</button>
            </div>
        </div>
        <div className="level">
            <div><img src="../image.png" alt="i" /></div>
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