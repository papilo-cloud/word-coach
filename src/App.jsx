import { useEffect, useRef, useState } from 'react'
import WordDefinition from './components/WordDefinition';
import Game from './components/Game';
import { ModalContext } from './components/ModalContext';

// const baseUrl1 = "https://dictionaryapi.com/api/v3/references/collegiate/json/alchemy?key=ddc8b6ea-7ce5-4f2a-9ff5-2426249b5255"



function App() {
  
  const [text, setText] = useState('')
  const [audio, setAudio] = useState()
  const [words, setWords] = useState([])
  const [game, setGame] = useState(false)
  const [isOpac, setIsOpac] = useState(false)
  const [isError, setIsError] = useState(false)
  const [modalClose, setModalClose] = useState(false)

  const fetchWord = async()=>{
    const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
    .then(resp => {if (!resp.ok) {
        setIsError(true)
      }
      setIsError(false)
      return resp.json()
    } 
    )
    .then(datas => {setWords(datas);
      setAudio(datas[0].phonetics[0].audio)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    let mounted = false;
    if (!mounted) {
      fetchWord();
    }
    return () => mounted = true;

    }, [text]);

  function handleChange(e) {
      setText(e.target.value)
  }

  function handleSubmit(e) {
      e.preventDefault();
      if (text.trim().length == 0) {
          alert('Enter a word')
      } else {
          setText('');
          fetchWord()
          setGame(true)
    }
  }
 
  
    
    // console.log(words)



  return (
    <ModalContext.Provider value={
      {
        isOpac,
        setIsOpac,
        words,
        setWords,
        setText,
        setAudio,
        setModalClose,
        modalClose
      }
    }>
      <div className={isOpac ? 'app opac':'app'} >
      {isError? <p>Error:</p>:
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
        {game && <Game data={words} />}
      </div>}
    </div>
    </ModalContext.Provider>
  )
}

export default App
