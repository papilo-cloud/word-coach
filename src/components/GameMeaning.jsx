import React from 'react'

const GameMeaning = ({score}) => {
  return (
    <div className='coach'>
        <p>word coach</p>
        <div className="svg">
            <div className='svgs'>
                <p>4/5</p>
            </div>
            <div className="txt">
                <p>Score <span></span> {score} </p>
                <p className='bold'>Almost Perfect</p>
            </div>
        </div>
        <div className="round">
            <p>Explanations</p>
            <button>Next round</button>
        </div>
        <div className="explanation">
            <p>hello World one</p>
            <p>hello World one</p>
            <p>hello World one</p>
            <p>hello World one</p>
            <p>hello World one</p>
        </div>
    </div>
  )
}

export default GameMeaning