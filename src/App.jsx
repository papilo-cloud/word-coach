import { useEffect, useRef, useState } from 'react'
import WordDefinition from './components/WordDefinition';
import Game from './components/Game';

// const baseUrl1 = "https://dictionaryapi.com/api/v3/references/collegiate/json/alchemy?key=ddc8b6ea-7ce5-4f2a-9ff5-2426249b5255"



function App() {
  
  const [text, setText] = useState()
  const [words, setWords] = useState([])

  const dataApi = async()=>{
    const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`);
    const dataJ = await data.json();
    setWords(dataJ);
  }


  useEffect(() => {
      dataApi();
    }, []);

  function handleChange(e) {
      setText(e.target.value)
  }

  function handleSubmit(e) {
      e.preventDefault();
      if (text.trim().length == 0) {
          alert('Enter a word')
      } else {
          setText('')
          dataApi();
    }
  }
 
  
    
    console.log(words)



  return (
    <div className='app'>
      {/* <h1>{count}</h1> */}
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
        {text === ''? <WordDefinition data={words} />:text === undefined?<div className="enter"><p>Enter a word</p></div>: ''}
        </div>
        <Game data={words} />
      </div>
    </div>
  )
}

export default App
