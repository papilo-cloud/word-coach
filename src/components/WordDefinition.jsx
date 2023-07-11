
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Speaker from './Speaker'
import Definition from './Definition';

const WordDefinition = ({data, audio}) => {
  // const [antonyms, setAntonyms] = useState([])
  // const [synonyms, setSynonyms] = useState([])

  // const data = axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/dear`)
  // .then(res => setSynonyms(res.data))
  
  // const setSyn = async() => {
  //   const url = "https://api.api-ninjas.com/v1/thesaurus?word=dear"
  //   const config = {
  //     headers: { 'X-Api-Key': 'd9rMZOyeZqmyL1k/mb1ooA==hWCnGvBuR0DK59QP'} 
  //   };
  //   axios.get(url, config)
  //   .then(res=> setAntonyms(res.data))
  //   .catch(err=> console.log(err.message))
  // }

  // useEffect(() => {
  //   setSyn()
  // }, [])

  
    return (
      <>
        {data.title?(
          <div className="nothing">
            <h2>{data.title}</h2>
            <p>{data.message}</p>
            <p>{data.resolution}</p>
          </div>
        ):(
          <div className="def">
            <div className="meaning">
              <Speaker audio={audio} />
              <p>{data[0].word} 
              <br /><span>{data[0].phonetics.length == 0? data[0].phonetic: data[0].phonetics[0].text}</span>
              </p>
            </div>
            <div className="definition">
              {data[0].meanings.map((mean, x) =>
              <Definition {...mean} key={x} />)}
            </div>
          </div>
        )}
      </>
   
  )
}

export default WordDefinition