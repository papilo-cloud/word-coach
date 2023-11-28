
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
  for (let i = 0; i < 20; i++) {
    const url = 'https://api.api-ninjas.com/v1/randomword'
    const config = {
      headers: { 'X-Api-Key': '8lN0nO6eNz+Wh0JaXLYQsQ==2vljliUGMVUrqPEQ'} 
    };
    axios.get(url, config)
    .then(res=> {
      const url1 = `https://api.api-ninjas.com/v1/thesaurus?word=${res?.data?.word}`
      const config1 = {
        headers: { 'X-Api-Key': '8lN0nO6eNz+Wh0JaXLYQsQ==2vljliUGMVUrqPEQ'} 
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

    


const Game = () => {

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
  const [animate, setAnimate] = useState(false)

  // console.log(random)
  // console.log(rand)

  useEffect(() => {
  }, [])
  //2 8lN0nO6eNz+Wh0JaXLYQsQ==2vljliUGMVUrqPEQ
  //1 d9rMZOyeZqmyL1k/mb1ooA==hWCnGvBuR0DK59QP
  const setSyn = async() => {
    const url = `https://api.api-ninjas.com/v1/thesaurus?word=${rand[index]}`
    const config = {
      headers: { 'X-Api-Key': '8lN0nO6eNz+Wh0JaXLYQsQ==2vljliUGMVUrqPEQ'} 
    };
    axios.get(url, config)
    .then(res=> {setAntonyms(res?.data?.antonyms );
                  setSynonyms(res?.data?.synonyms);
                  setGetSyn([...getSyn, res?.data?.synonyms?.[0]]);
                  setGetAnt([...getAnt, res?.data?.antonyms?.[0]])
                })
    .catch(
      err=> console.error(err.message)
    )
  }

  useEffect(() => {
    setSyn()
  }, [index])

  const fetchWords = async (url) => {
    const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${url}`);
    const words = await data.json();
    setWord([...word, words]);
  }

  const fetchWordss = async () => {
      const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${getSyn?.[index]}`);
      const data1 = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${getAnt?.[index]}`);
      const words = await data.json();
      const words1 = await data1.json();
      setSynWord([...synWord, words]);
      setAntWord([...antWord, words1])
    
  }

  const handleClickOne = (params) => {
    setCount(count+1);
    handleAnimate();

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
    }
    else{
      setGuesses([...guesses, params])
      setCorrect(false)
      setVal([...val,false])
    }

  }
  function handleClickTwo(params) {
    setCount(count+1);
    handleAnimate();

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
    handleClickOne();
    fetchWordss(); 
    fetchWords(rand[index])
  }
  function handleAnimate(){
    setAnimate(true) 
    setTimeout(() => {
      setAnimate(false)
    }, 2000);
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
    <div
      
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
          setGuesses={setGuesses}
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
                <p>score</p><span className='span'></span><span className={animate?'count count-animate':'count'}>{score}</span>
              </div>:
              <div className="more">
              <p>Learn new words</p>
            </div>
            }
        </div>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: index == count ? 1: 0 }}
        transition={{duration: .5,  delay: 0.5 }}>
          <div className="words">
              <p>which word is <i>{guess[0].includes('opposite')? `the ${guess[0]} of `: `${guess[0]} to ` }  </i>{rand[index]}?</p>
              <div className="box">
                {srtBtn[0]}
                <p>or</p>
                {srtBtn[1]}
              </div>
          </div>
        </motion.div>
          <div className="level">
            <div><img src={image} alt="i" /></div>
            <div className="span">
              {rand.map((spn, i) => <span key={i}
              className={(index == i)?'spans next':'spans'}
              style={{
                backgroundColor: val[i] ? '#0d0':val[i] == false ? '#f81f02':'' 
              }} ></span> )}
            </div>
            <button onClick={onSkip}>skip</button>
        </div>
        </div>
      )}
        
    </div>
  )
}

export default Game