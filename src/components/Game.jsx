
import React, { useContext, useEffect, useState } from 'react'
import image from '../assets/download.svg'
import cross from '../assets/cross.svg'
import check from '../assets/checkmark.svg'
import axios from 'axios'

let randWords = ['hello','cardinal', 'magic','ordain','stagnant']
for (let i = 0; i < randWords.length; i++) {
  
  
}
// console.log(randWords.includes('hellos'))
const Game = ({data}) => {

  const [rand, setRand] = useState(randWords)
  const [index, setIndex] = useState(0)
  const [antonyms, setAntonyms] = useState([])
  const [synonyms, setSynonyms] = useState([])
  const [correct, setCorrect] = useState(false);
  const [clicked, setClicked] = useState(false)
 
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
  }, [])
  const randomAntonyms = Math.floor(Math.random()* (antonyms.length -1))
  const randomSynonyms = Math.floor(Math.random()* (synonyms.length - 1))

  function handleClickOne(params) {
    alert('Still under construction.')
    setClicked(true)
    if (!antonyms.indexOf(rand[index])) {
      setCorrect(true)
    } else {
      
    }
  }

  return (
    <div className='main'>
        <div className="top">
            <p>word coach</p>
            <div className="more">
              <p>Learn new words</p>
            </div>
        </div>
        <div className="words">
            <p>which word is <i>opposite</i> of {rand[index]}?</p>
            <div className="box">
              <button onClick={handleClickOne} className={clicked && correct? 'correct': 'wrong'}>
                {clicked && <img src={correct? cross: check} alt="" /> }
                 {antonyms[randomAntonyms]}</button>
              <p>or</p>
              <button handleClickTwo>Neighborhood</button>
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