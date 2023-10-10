
import React, { useContext, useEffect, useState } from 'react'
import image from '../assets/download.svg'
import cross from '../assets/cross.svg'
import check from '../assets/checkmark.svg'
import axios from 'axios'
import GameMeaning from './GameMeaning'
import { motion } from "framer-motion";
import { util } from './util'


var rndm = []
rndWord()

function rndWord() {
  // let rndm = []
  for (let i = 0; i < 80; i++) {
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
         rndm.push(res?.data?.word)
      }})
    } )
    // .catch(err=> console.log(err.message))
}
return rndm
}
// document.addEventListener('load',()=> rndWord())
    


const Game = () => {
  // const [number, setNumber] = useState(0)
  const [random, setRandom] = useState(rndm)
  const x = random.length> 5? random.slice(random.length-5): random.slice()
  let [rand, setRand] = useState(x)
  const [index, setIndex] = useState(0)
  const [antonyms, setAntonyms] = useState([])
  const [synonyms, setSynonyms] = useState([])
  const [getSyn, setGetSyn] = useState([])
  const [getAnt, setGetAnt] = useState([])
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
  const [count, setCount] = useState(0)
  const [synWord, setSynWord] = useState([])
  const [antWord, setAntWord] = useState([])

  // console.log(random)
  // console.log(rand)

  useEffect(() => {
  }, [])
  
 
  const setSyn = async() => {
    const url = `https://api.api-ninjas.com/v1/thesaurus?word=${rand[index]}`
    const config = {
      headers: { 'X-Api-Key': 'd9rMZOyeZqmyL1k/mb1ooA==hWCnGvBuR0DK59QP'} 
    };
    axios.get(url, config)
    .then(res=> {setAntonyms(res?.data?.antonyms );
                  setSynonyms(res?.data?.synonyms);
                  setGetSyn([...getSyn, res?.data?.synonyms[0]]);
                  setGetAnt([...getAnt, res?.data?.antonyms[0]])
                })
    .catch(
      // err=> console.log(err.message)
    )
  }
  // console.log(getSyn)
  // console.log(getAnt)
  useEffect(() => {
    setSyn()
  }, [index])

  const fetchWords = async (url) => {
    const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${url}`);
    const words = await data.json();
    setWord([...word, words]);
  }

  const fetchWordss = async () => {
      const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${getSyn[index]}`);
      const data1 = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${getAnt[index]}`);
      const words = await data.json();
      const words1 = await data1.json();
      setSynWord([...synWord, words]);
      setAntWord([...antWord, words1])
    
  }
  // useEffect(() => {
  // }, [getSyn])

  // console.log(synWord)
  // console.log(antWord)
  // console.log(getSyn)
  // console.log(word)
  

  const handleClickOne = (params) => {
    setCount(count+1);

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
    setCount(count+1);

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
    }
    else{
      setGuesses([...guesses, params])
      setCorrect1(false)
      setVal([...val,false])
    }
  }
  function onSkip() {
    // setIndex(index + 1)
    // console.log(index)
  }

  const guess = ['opposite', 'similar'].sort((a,b) => 0.5 - Math.random())
  const srtBtn = [
    <button 
      className={clicked && correct? 'buttons correct': clicked && !correct? 'buttons wrong': 'buttons'} 
      onClick={() => {handleClickOne('similar');fetchWordss(); fetchWords(rand[index])}}>
      {clicked && <img src={correct? check: cross} alt="check/cross" /> }{synonyms[0] || synonyms[1]}
      </button>,
    <button
      className={clicked1 && correct1? 'buttons correct': clicked1 && !correct1? 'buttons wrong': 'buttons'} 
      onClick={() => {handleClickTwo('opposite');fetchWordss(); fetchWords(rand[index])}}>
      {clicked1 && <img src={correct1? check: cross} alt="check/cross" /> }{antonyms[0] || antonyms[1]}
      </button>
  ].sort((a,b) =>
    0.5 - Math.random())

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: index == count ? 1: 0 }}
      transition={{duration: .5,  delay: 0.5 }}
      className='main'>
      {index > 4? (
        
        <GameMeaning
          setCount={setCount}
          setRandom={setRandom}
          util={rndWord}
          setRand={setRand}
          getAnt={getAnt}
          getSyn={getSyn}
          setGetAnt={setGetAnt}
          setGetSyn={setGetSyn}
          guesses={guesses}
          synonyms={synonyms}
          antonyms={antonyms}
          val={val}
          setVal={setVal}
          random={random}
          setWord={setWord}
          score={score} 
          setIndex={setIndex}
          setPoint={setPoint} 
          point={point} 
          word={word} 
          synWord={synWord}
          antWord={antWord}
          setSynWord={setSynWord}
          setAntWord={setAntWord}
          />
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
          <div className="words"
          
          >
              <p>which word is <i>{guess[0].includes('opposite')? `the ${guess[0]} of `: `${guess[0]} to ` }  </i>{rand[index]}?</p>
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
            <button onClick={onSkip}>skip</button>
        </div>
        </div>
      )}
        
    </motion.div>
  )
}

export default Game