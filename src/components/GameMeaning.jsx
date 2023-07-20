import React from 'react'

const GameMeaning = ({score, setIndex, setPoint, point}) => {

    let board ='';
    if (point == 0) {
        board = 'Keep Playing'
    }
    if (point == 1) {
        board = 'Good Effort'
    }
    if (point == 2) {
        board = 'Great Work'
    }
    if (point == 3) {
        board = 'Well Done'
    }
    if (point == 4) {
        board = 'Almost Perfect';
    }
    if (point == 5) {
        board = 'Perfect'
    }
    const explanation = []
    
  return (
    <div className='coach'>
        <p>word coach</p>
        <div className="svg">
            <div className='svgs'>
                <p>{point}/5</p>
            </div>
            <div className="txt">
                <p>Score <span></span> {score} </p>
                <p className='bold'>{board}</p>
            </div>
        </div>
        <div className="round">
            <p>Explanations</p>
            <button onClick={() => {setPoint(0); setIndex(0)}}>Next round</button>
        </div>
        <div className="explanation">
            <div className="text">
                <p>hello World one</p>
            </div>
            <div className="text">
                <p>hello World one</p>
            </div>
            <div className="text">
                <p>hello World one</p>
            </div>
            <div className="text">
                <p>hello World one</p>
            </div>
            <div className="text">
                <p>hello World one</p>
            </div>
        </div>
    </div>
  )
}

export default GameMeaning