import { useEffect, useRef, useState } from 'react'
import WordDefinition from './components/WordDefinition';
import Game from './components/Game';

// const baseUrl1 = "https://dictionaryapi.com/api/v3/references/collegiate/json/alchemy?key=ddc8b6ea-7ce5-4f2a-9ff5-2426249b5255"



function App() {
  
  const [text, setText] = useState()
  const [audio, setAudio] = useState()
  const [words, setWords] = useState([])

  const fetchWord = async()=>{
    const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
    const word = await data.json();
    setWords(word);
    const audUlr = word[0].phonetics[0].audio
    setAudio(audUlr)
  }


  useEffect(() => {
      fetchWord();
    }, []);

  function handleChange(e) {
      setText(e.target.value)
  }

  function handleSubmit(e) {
      e.preventDefault();
      if (text.trim().length == 0) {
          alert('Enter a word')
      } else {
          setText('');
          fetchWord();
    }
  }
 
  
    
    console.log(words)



  return (
    <div className='app'>
      <div className="class">
        <div className="search">
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
        {text === ''? <WordDefinition audio={audio} data={words} />:text === undefined?<div className="enter"><p>Enter a word</p></div>: ''}
        </div>
        <Game data={words} />
      </div>
    </div>
  )
}

export default App
