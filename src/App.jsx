import { useEffect, useRef, useState } from 'react'
import WordDefinition from './components/WordDefinition';
import Game from './components/Game';
import { ModalContext } from './components/ModalContext';
import axios from 'axios';

// const baseUrl1 = "https://dictionaryapi.com/api/v3/references/collegiate/json/alchemy?key=ddc8b6ea-7ce5-4f2a-9ff5-2426249b5255"



function App() {
  
  const [text, setText] = useState('')
  const [audio, setAudio] = useState()
  const [words, setWords] = useState([])
  const [game, setGame] = useState(false)
  const [isOpac, setIsOpac] = useState(false)
  const [isErrors, setIsErrors] = useState(false)
  const [modalClose, setModalClose] = useState(false)


  const fetchWord = async()=>{
    const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
    .then(resp => {if (!resp.ok) {
      }
      return resp.json()
    } 
    )
    .then(datas => {setWords(datas);
      setAudio(datas[0]?.phonetics[0]?.audio)
      setIsErrors(false)
      console.log( )
    })
    .catch(err => {
      console.log(err)
      setIsErrors(true)
    })
}
  
 
  function handleChange(e) {
      setText(e.target.value)
  }

  function handleSubmit(e) {
      e.preventDefault();
      if (text.trim().length == 0) {
          alert('Enter a word')
      }
        setText('');
          fetchWord()
          setGame(true)
    }


  return (
    <ModalContext.Provider value={
      {
        isOpac,
        setIsOpac,
        words,
        setWords,
        setText,
        text,
        setAudio,
        setModalClose,
        modalClose
      }
    }>
      <div className={isOpac ? 'app opac':'app'} >
      {isErrors?
        <div className="class" id={modalClose? 'one':''} >
        <div className={isOpac ? 'search opac':'search'}>
          <h1>Dictionary</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <input
               type="text" 
               value={text}
               onChange={handleChange}
               placeholder='Search for word' />
            </label>
        </form>
        </div>
        <p className='error-msg' >Error: Something went wrong <br />Try again. </p>
      </div>:
      <div className="class" id={modalClose? 'one':''} >
        <div className={isOpac ? 'search opac':'search'}>
          <h1>Dictionary</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <input
               type="text" 
               value={text} 
               onChange={handleChange}
               placeholder='Search for word' />
            </label>
        </form>
        {game && text.length == 0? <WordDefinition audio={audio} data={words} />:<div className="enter"><p>Enter a word</p></div>}
        </div>
        {game && <Game text={text} data={words} />}
      </div>}
    </div>
    </ModalContext.Provider>
  )
}

export default App
