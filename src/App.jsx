import { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import InputSearch from './components/InputSearch';
import WordDefinition from './components/WordDefinition';
import Game from './components/Game';

// const baseUrl1 = "https://dictionaryapi.com/api/v3/references/collegiate/json/alchemy?key=ddc8b6ea-7ce5-4f2a-9ff5-2426249b5255"

const url = "https://api.api-ninjas.com/v1/thesaurus?word=dear"
const config = {
  headers: { 'X-Api-Key': 'd9rMZOyeZqmyL1k/mb1ooA==hWCnGvBuR0DK59QP'} 
};
axios.get(url, config)
  .then(res=> console.log(res.data))
  .catch(err=> console.log(err.message))

const data = [
  {
    id: 1,
    posp: 'noun',
    word: `alchemy`,
    pronon: `'alkemi`,
    def1: `the medieval forerunner of chemistry, concerned with the transmutation of matter,
          in particular with attempts to convert base metals into gold or find a universal elixir.`,
    def1usage: `occult sciences, such as alchemy and astrology`,
    ord: 'occult sciences, such as alchemy and astrology',

    syn: ['chemistry', 'magic', 'sorcery','wizard','a','r','s', 'witchcraft','wizard','magnet','pull','enchantement',
    'mesmerize','call,','decoy','allure', 'hello'],

    def2: 'a seemingly magical process of transformation, creation, or combination',
    def2usage: `finding the person who's right for you requires a very subtle alchemy`,
}
]

function App() {
  let [text, setText] = useState('')
  const [words, setWords] = useState([])

  function findWord(txt) {
    setText(txt)
  }
   



  return (
    <div className='app'>
      {/* <h1>{count}</h1> */}
      <div className="class">
        <div className="search">
          <h1>Dictionary</h1>
          <InputSearch 
          findWord={findWord} 
          />
         {words && data.map((dat, x) =>  <WordDefinition key={x} {...dat} />)}
        </div>
        <Game data={data} />
      </div>
    </div>
  )
}

export default App
