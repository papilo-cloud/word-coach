
import React, { useContext, useEffect, useState } from 'react'
import image from '../assets/download.svg'
import cross from '../assets/cross.svg'
import check from '../assets/checkmark.svg'
import axios from 'axios'
import GameMeaning from './GameMeaning'

let randWords = ['hello','cardinal', 'magic','never','stagnant']

const Game = ({data}) => {

  const [rand, setRand] = useState(randWords)
  const [index, setIndex] = useState(0)
  const [antonyms, setAntonyms] = useState([])
  const [synonyms, setSynonyms] = useState([])
  const [correct, setCorrect] = useState(false);
  const [correct1, setCorrect1] = useState(false);
  const [clicked, setClicked] = useState(false)
  const [clicked1, setClicked1] = useState(false)
  const [click, setClick] = useState(false)
  const [score, setScore] = useState(0)
  // console.log(rand.length)
 
  const setSyn = async() => {
    const url = `https://api.api-ninjas.com/v1/thesaurus?word=${rand[index]}`
    const config = {
      headers: { 'X-Api-Key': 'd9rMZOyeZqmyL1k/mb1ooA==hWCnGvBuR0DK59QP'} 
    };
    axios.get(url, config)
    .then(res=> {setAntonyms(res.data.antonyms )
                  setSynonyms(res.data.synonyms)})
    .catch(err=> console.log(err.message))
  }

  useEffect(() => {
    setSyn()
  }, [index])


  function handleClickOne(params) {
    setTimeout(() => {
      if (index >= 4) {
        setIndex(0)
      } else{
        setIndex(index + 1)
      }
    }, 1000);
    setClicked(true)
    setClick(true)
    setTimeout(() => {
      setClicked(false)
    }, 1100);
    if (guess[0].includes(params) ) {
      setCorrect(true)
      setScore(score + 200)
      // alert('correct')
    }
    else{
      setCorrect(false)
      // alert('false')
    }

  }
  function handleClickTwo(params) {
    setTimeout(() => {
      if (index >= 4) {
        setIndex(0)
      } else{
        setIndex(index + 1)
      }
    }, 1000);
    setClick(true)
    setClicked1(true)
    setTimeout(() => {
      setClicked1(false)
    }, 1100);
    if (guess[0].includes(params) ) {
      setCorrect1(true)
      setScore(score + 200)
      // alert('correct')
    }
    else{
      setCorrect1(false)
      // alert('false')
    }
  }

  const guess = ['opposite', 'similar'].sort((a,b) => 0.5 - Math.random())
  const srtBtn = [
    <button 
      className={clicked && correct? 'buttons correct': clicked && !correct? 'buttons wrong': 'buttons'} 
      onClick={() => handleClickOne('similar')}>
      {clicked && <img src={correct? check: cross} alt="check/cross" /> }{synonyms[0]}
      </button>,
    <button
      className={clicked1 && correct1? 'buttons correct': clicked1 && !correct1? 'buttons wrong': 'buttons'} 
      onClick={() => handleClickTwo('opposite')}>
      {clicked1 && <img src={correct1? check: cross} alt="check/cross" /> }{antonyms[0]}
      </button>
  ].sort((a,b) =>
    0.5 - Math.random())

  // console.log(guess[0])

  return (
    <div className='main'>
      {index < 4? (
        <div>
        <div className="top">
            <p>word coach</p>
            {
              click ? <div className="score">
                <p>score</p><span></span>{score}
              </div>:
              <div className="more">
              <p>Learn new words</p>
            </div>
            }
        </div>
          <div className="words">
              <p>which word is {guess[0].includes('opposite')? `the ${guess[0]} of `: `${guess[0]} to `}  {rand[index]}?</p>
              <div className="box">
                {srtBtn[0]}
                <p>or</p>
                {srtBtn[1]}
              </div>
          </div>
          <div className="level">
            <div><img src={image} alt="i" /></div>
            <div className="span">
              {rand.map((spn, i) => <span 
              className={index == i? 'spans next':'spans'} ></span> )}
            </div>
            <p>skip</p>
        </div>
        </div>
      ): (
        <GameMeaning score={score} />
      )}
        
    </div>
  )
}

export default Game