import React, { useEffect, useRef, useState } from 'react'
import arrow from '../assets/down-arrow.svg'
import cross from '../assets/crossn.svg'
import check from '../assets/checkmarkn.svg'

const GameMeaning = ({guesses, val, setWord, score, setIndex, setPoint, point, word, setNumber}) => {
    const [click, setClick] = useState(7)

    const circle = useRef()

    useEffect(() => {
        let svg = circle.current;
        let length = svg.getTotalLength();
        // console.log(length)
        svg.style.strokeDasharray = length;
        svg.style.strokeDashoffset = length
        let ans = 35.12899 * (5-point);
        svg.getBoundingClientRect();
        svg.style.transition = 'stroke-dashoffset 1s ease-in-out'
        svg.style.strokeDashoffset = ans
    }, [])
    

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

    function handleClick(arg) {
        setClick(arg)
    }
  return (
    <div className='coach'>
        <p>word coach</p>
        <div className="svg">
            <div className='svgs'>
                <svg>
                    <circle cx={32} cy={32} r={28} fill='none' />
                    <circle cx={32} cy={32} r={28} fill='none' ref={circle} />
                </svg>
                <p>{point}/5</p>
            </div>
            <div className="txt">
                <p>Score <span></span> {score} </p>
                <p className='bold'>{board}</p>
            </div>
        </div>
        <div className="round">
            <p>Explanations</p>
            <button onClick={() => {setPoint(0);setNumber(5); setIndex(0); setWord([])}}>Next round</button>
        </div>
        <div className="explanation">
           {word?.map((wrd, x) => <div className="text" key={x}>
            <button className='exp-butn' onClick={() => handleClick(x)}>
               <p> {val[x]? <img src={check} alt="check" />: <img src={cross} alt="cross" /> } 
                Word {guesses[x] == 'similar'? 'similar to': 'opposite of'} {wrd[0]?.word}?</p>
                <img src={arrow} alt="down-arrow" />
            </button>
            <div className={click == x? "exp-text display": "exp-text"}>
                <p className='p'>Learn why</p>
                <p>What's the definition of {wrd[0]?.word}?</p>
                <p> {wrd[0]?.meanings[0]?.definitions[0]?.definition} </p>
            </div>
            </div>)}
        </div>
    </div>
  )
}

export default GameMeaning