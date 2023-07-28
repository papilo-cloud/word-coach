
import React, { useContext, useEffect, useState } from 'react'
import image from '../assets/download.svg'
import cross from '../assets/cross.svg'
import check from '../assets/checkmark.svg'
import axios from 'axios'
import GameMeaning from './GameMeaning'

let rndm = [];
    for (let i = 0; i < 30; i++) {
        const url = 'https://api.api-ninjas.com/v1/randomword'
        const config = {
          headers: { 'X-Api-Key': 'd9rMZOyeZqmyL1k/mb1ooA==hWCnGvBuR0DK59QP'} 
        };
        axios.get(url, config)
        .then(res=> {
          const url1 = `https://api.api-ninjas.com/v1/thesaurus?word=${res?.data?.word}`
          const config1 = {
            headers: { 'X-Api-Key': 'd9rMZOyeZqmyL1k/mb1ooA==hWCnGvBuR0DK59QP'} 
          };
          axios.get(url1, config1)
          .then(res=> {if (res?.data?.synonyms?.length >1 && res?.data?.antonyms?.length >1) {
            return rndm.push(res?.data?.word)
          }})
        } )
        .catch(err=> console.log(err.message))
        
    }

console.log(rndm)

const Game = () => {
  // const [number, setNumber] = useState(0)
  const [rand, setRand] = useState(rndm.slice(0, 5))
  const [index, setIndex] = useState(0)
  const [antonyms, setAntonyms] = useState([])
  const [synonyms, setSynonyms] = useState([])
  const [val, setVal] = useState([])
  const [guesses, setGuesses] = useState([])
    const [word, setWord] = useState([])
    const [correct, setCorrect] = useState(false);
  const [correct1, setCorrect1] = useState(false);
  const [clicked, setClicked] = useState(false)
  const [clicked1, setClicked1] = useState(false)
  const [click, setClick] = useState(false)
  const [score, setScore] = useState(0)
  const [point, setPoint] = useState(0)

  useEffect(() => {
  }, [])
  
 
  const setSyn = async() => {
    const url = `https://api.api-ninjas.com/v1/thesaurus?word=${rand[index]}`
    const config = {
      headers: { 'X-Api-Key': 'd9rMZOyeZqmyL1k/mb1ooA==hWCnGvBuR0DK59QP'} 
    };
    axios.get(url, config)
    .then(res=> {setAntonyms(res?.data?.antonyms )
                  setSynonyms(res?.data?.synonyms)
                })
    .catch(err=> console.log(err.message))
  }

  useEffect(() => {
    setSyn()
  }, [index])

  const fetchWords = async (url) => {
    const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${url}`);
    const words = await data.json();
    setWord([...word, words]);
  }


  const handleClickOne = (params) => {
    setTimeout(() => {
      if (index > 4) {
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
      setGuesses([...guesses, params])
      setCorrect(true)
      setVal([...val,true])
      setScore(score + 200)
        setPoint(point + 1)
        // alert('correct')
    }
    else{
      setGuesses([...guesses, params])
      setCorrect(false)
      setVal([...val,false])
      // alert('false')
    }

  }
  function handleClickTwo(params) {
    setTimeout(() => {
      if (index > 4) {
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
      setGuesses([...guesses, params])
      setVal([...val,true])
      setCorrect1(true)
        setPoint(point + 1)
        setScore(score + 200)
      // alert('correct')
    }
    else{
      setGuesses([...guesses, params])
      setCorrect1(false)
      setVal([...val,false])
      // alert('false')
    }
  }

  const guess = ['opposite', 'similar'].sort((a,b) => 0.5 - Math.random())
  const srtBtn = [
    <button 
      className={clicked && correct? 'buttons correct': clicked && !correct? 'buttons wrong': 'buttons'} 
      onClick={() => {handleClickOne('similar'); fetchWords(rand[index])}}>
      {clicked && <img src={correct? check: cross} alt="check/cross" /> }{synonyms[0] || synonyms[1]}
      </button>,
    <button
      className={clicked1 && correct1? 'buttons correct': clicked1 && !correct1? 'buttons wrong': 'buttons'} 
      onClick={() => {handleClickTwo('opposite'); fetchWords(rand[index])}}>
      {clicked1 && <img src={correct1? check: cross} alt="check/cross" /> }{antonyms[0] || antonyms[1]}
      </button>
  ].sort((a,b) =>
    0.5 - Math.random())

  return (
    <div className='main'>
      {index > 4? (
        
        <GameMeaning
         guesses={guesses}
         synonyms={synonyms}
         antonyms={antonyms}
          val={val}setWord={setWord}
           score={score} setIndex={setIndex}
            setPoint={setPoint} point={point} word={word} />
      ): (
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
              {rand.map((spn, i) => <span key={i}
              className={index == i? 'spans next':'spans'} ></span> )}
            </div>
            <p>skip</p>
        </div>
        </div>
      )}
        
    </div>
  )
}

export default Game