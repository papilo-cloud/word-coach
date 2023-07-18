
import React, { useContext, useEffect, useState } from 'react'
import image from '../assets/download.svg'
import cross from '../assets/cross.svg'
import check from '../assets/checkmark.svg'
import axios from 'axios'

let randWords = ['hello','cardinal', 'magic','never','stagnant']
for (let i = 0; i < randWords.length; i++) {
  
  
}
// console.log(randWords.includes('hellos'))
const Game = ({data}) => {

  const [rand, setRand] = useState(randWords)
  const [index, setIndex] = useState(0)
  const [antonyms, setAntonyms] = useState([])
  const [synonyms, setSynonyms] = useState([])
  const [correct, setCorrect] = useState(false);
  const [correct1, setCorrect1] = useState(false);
  const [clicked, setClicked] = useState(false)
  const [clicked1, setClicked1] = useState(false)
  // console.log(synonyms)
 
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
  // const randomAntonyms = Math.floor(Math.random()* (antonyms.length -1))
  // const randomSynonyms = Math.floor(Math.random()* (synonyms.length - 1))

  function handleClickOne(params,e) {
    if (index >= 4) {
      setIndex(0)
    } else{
      setIndex(index + 1)
    }
    setClicked(true)
    setTimeout(() => {
      setClicked(false)
    }, 1000);
    if (guess[0].includes(params) ) {
      setCorrect(true)
      e.stopPropagation()
    }
  else{
    setCorrect(false)
    e.stopPropagation()
  }

  }
  function handleClickTwo(params,e) {
    if (index >= 4) {
      setIndex(0)
    } else{
      setIndex(index + 1)
    }
    setClicked1(true)
    setTimeout(() => {
      setClicked1(false)
    }, 1000);
    if (guess[0].includes(params) ) {
      setCorrect1(true)
      e.stopPropagation()
    }
  else{
    setCorrect1(false)
    e.stopPropagation()
  }
  }

  // const randSyn = synonyms.sort((a,b) => 0.5 - Math.random())
  // const randAnt = antonyms.sort((a,b) => 0.5 - Math.random())
  const guess = ['opposite', 'similar'].sort((a,b) => 0.5 - Math.random())
  const srtBtn = [
    <button onClick={() => handleClickOne('similar')}>{clicked && <img src={correct? check: check} alt="" /> }{synonyms[0]}</button>,
    <button onClick={() => handleClickTwo('opposite')}>{clicked1 && <img src={correct1? check: cross} alt="" /> }{antonyms[0]}</button>
  ].sort((a,b) => 0.5 - Math.random())
  // console.log(guess[0])

  return (
    <div className='main'>
        <div className="top">
            <p>word coach</p>
            <div className="more">
              <p>Learn new words</p>
            </div>
        </div>
        <div className="words">
            <p>which word is {guess[0].includes('opposite')? `the ${guess[0]} of `: `${guess[0]} to `}  {rand[index]}?</p>
            <div className="box">
              {/* <button onClick={() =>handleClickOne(antonyms[randomAntonyms])} className={clicked && correct? 'correct': 'wrong'}> */}
                {/*  */}
                 {/* {randAnt}</button> */}
              {srtBtn[0]}
              <p>or</p>
              {srtBtn[1]}
              {/* <button onClick={() => handleClickOne(synonyms[randomSynonyms])}>{randSyn}</button> */}
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