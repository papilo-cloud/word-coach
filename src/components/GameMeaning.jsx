import React, { useEffect, useRef, useState } from 'react'
import arrow from '../assets/down-arrow.svg'
import cross from '../assets/crossn.svg'
import check from '../assets/checkmarkn.svg'

const GameMeaning = ({setRandom, random, util, guesses, val, setCount, getAnt, getSyn, setWord, score, setIndex, setPoint, point, word, synonyms, antonyms}) => {
    const [click, setClick] = useState(7)
console.log(util().slice(util().length - 10) )

  console.log(random)
    const circle = useRef()

    useEffect(() => {
        let svg = circle.current;
        let length = svg.getTotalLength();
        svg.style.strokeDasharray = length;
        svg.style.strokeDashoffset = length
        let ans = 35.12899 * (5-point);
        svg.getBoundingClientRect();
        svg.style.transition = 'stroke-dashoffset 1s ease-in-out'
        svg.style.strokeDashoffset = ans
    }, [])
    
    let boardMsg = {
        0 : 'Keep Playing',
        1 : 'Good Effort',
        2 : 'Great Work',
        3 : 'Well Done',
        4 : 'Almost Perfect',
        5 : 'Perfect'
    }
 
    function boardMessage(key) {
        return boardMsg[key]
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
                <p className='bold'>{boardMessage(point)}</p>
            </div>
        </div>
        <div className="round">
            <p>Explanations</p>
            <button onClick={() => {setRandom(random.slice(random.length - 10));setPoint(0); setCount(0); setIndex(0); setWord([])}}>Next round</button>
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
                <p> {wrd[1]?.meanings[0]?.definitions[0]?.definition} </p>
            </div>
            </div>)}
        </div>
    </div>
  )
}

export default GameMeaning