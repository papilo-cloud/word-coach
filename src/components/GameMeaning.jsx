import React, { useEffect, useRef, useState } from 'react'
import arrow from '../assets/down-arrow.svg'
import cross from '../assets/crossn.svg'
import check from '../assets/checkmarkn.svg'
import { boardMessage } from '../utilities/boardMessage'

const GameMeaning = ({setGetAnt,setGetSyn,setRand,synWord, antWord, setSynWord, setAntWord, setRandom, random, util,setGuesses, guesses, val,setVal, setCount, getAnt, getSyn, setWord, score, setIndex, setPoint, point, word, synonyms, antonyms}) => {
    const [click, setClick] = useState(7)
    // const [clickBtn, setClickBtn] = useState(false)
    // console.log(util().slice(util().length - 5) )
    console.log(synWord[0][0])
    console.log(synWord[0])
    console.log(synWord.length)
    // console.log(word[0][0].)

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
    
   
    function handleClick(arg) {
        setClick(arg)
        // setClickBt)
    }
    function nextRountButn() {
        setRandom(random.slice(random.length-10));
        setRand(util().slice(util().length - 5));
        setPoint(0); setCount(0); setIndex(0); 
        setWord([]);
        setGetAnt([]);
        setGetSyn([]);
        setVal([]);
        setSynWord([]);
        setAntWord([]);
        setGuesses([])
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
            <button onClick={nextRountButn}>Next round</button>
        </div>
        <div className="explanation">
           {word?.map((wrd, x) => <div className="text" key={x}>
            <button className={click == x?'exp-butn exp-butn1':'exp-butn'} onClick={() => handleClick(x)}>
               <p> {val[x]? <img src={check} alt="check" />: <img src={cross} alt="cross" /> } 
                Word {guesses[x] == 'similar'? 'similar to': 'opposite of'} {wrd[0]?.word}?</p>
                <img src={arrow} alt="down-arrow" />
            </button>
            
            <div className={click == x ? "exp-text display": "exp-text"}>
                <div className='word-list'>
                    <p><img src={check} alt="check" /> {getSyn[x]}</p>
                    <p><img src={cross} alt="cross" /> {getAnt[x]}</p>
                </div>
                <div className="word-definition">
                    <p className='p'>Learn why</p>
                    <p>What's the definition of {wrd[0]?.word}?</p>
                    <p> {wrd[0]?.meanings[0]?.definitions[0]?.definition} </p>
                    <p> {wrd[0]?.meanings[1]?.definitions[0]?.definition} </p>
                    <p> {wrd[0]?.meanings[0]?.definitions[1]?.definition} </p>
                    <p> {wrd[0]?.meanings[1]?.definitions[1]?.definition} </p>
                </div>
                <div className="word-similar">
                    <p className='word-p'>{guesses[x] == 'similar'? `How is ${getSyn[x]} similar`: `How is ${getSyn[x]} different`}</p>
                    <p>{Array.isArray(synWord) && synWord.length > 0 ? synWord[x][0]?.meanings[1]?.definitions[0]?.definition : ''}</p>
                    <p>{Array.isArray(synWord) && synWord.length > 0 ? synWord?.[x][0]?.meanings[0]?.definitions[0]?.definition : ''}</p>
                    <p>{Array.isArray(synWord) && synWord.length > 0 ? synWord?.[x][0]?.meanings[0]?.definitions[1]?.definition : ''}</p>
                    <p>{Array.isArray(synWord) && synWord.length > 0 ? synWord?.[x][0]?.meanings[1]?.definitions[1]?.definition : ''}</p>
                </div>
                <div className="word-dissimilar">
                    <p className='word-p'>{guesses[x] == 'similar'? `How is ${getAnt[x]} different`: `What is the definition of ${getAnt[x]} `}</p>
                    <p>{Array.isArray(antWord) && antWord.length > 0 ? antWord?.[x][0]?.meanings[1]?.definitions[0]?.definition : ''}</p>
                    <p>{Array.isArray(antWord) && antWord.length > 0 ? antWord?.[x][0]?.meanings[0]?.definitions[0]?.definition : ''}</p>
                    <p>{Array.isArray(antWord) && antWord.length > 0 ? antWord?.[x][0]?.meanings[0]?.definitions[1]?.definition : ''}</p>
                    <p>{Array.isArray(antWord) && antWord.length > 0 ? antWord?.[x][0]?.meanings[1]?.definitions[1]?.definition : ''}</p>
                </div>
            </div>
            </div>)}
        </div>
    </div>
  )
}

export default GameMeaning