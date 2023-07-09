import { useEffect, useState } from 'react'
import axios from 'axios';

const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/dear'
const baseUrl1 = "https://dictionaryapi.com/api/v3/references/collegiate/json/alchemy?key=ddc8b6ea-7ce5-4f2a-9ff5-2426249b5255"
const data = [
  {
    id: 1,
    posp: 'noun',
    def1: `the medieval forerunner of chemistry, concerned with the transmutation of matter,
          in particular with attempts to convert base metals into gold or find a universal elixir`,
    ord: 'occult sciences, such as alchemy and astrology',
    syn: ['chemistry', 'magic', 'sorcery'],
    def2: 'a seemingly amgical process of transformation, creation, or combination'
}
]

function App() {
  const [count, setCount] = useState(null)
  useEffect(() => {
    axios.get(`${baseUrl1}`).then(response => setCount(response.data))
  },[])

  console.log(count)

  return (
    <div className='app'>
      {/* <h1>{count}</h1> */}
      <div className="class">
        <div className="search">
          <h1>Dictionary</h1>
          <form>
            <label>
              <input type="text" placeholder='Search for word' />
            </label>
          </form>
          <div className="def">
            <div className="meaning">
              <img src="../image.png" alt="" />
              <p>alchemy <span>/'alkemi/</span></p>
            </div>
            <div className="definition">
              {data.map(dat => <div>
                <span>{dat.posp} </span>
                <p>{dat.def1} </p>
                <div className="butn">
                  Similar: {dat.syn.map((idx, x) => <button key={x} >{idx}</button> )}
                </div>
              </div> )}
            </div>
          </div>
        </div>
        
        <div className="main">
          <div className="top">
            <p>word coach</p>
            <div className="score">
              <p>score</p>
              <span></span>
              <p>360</p>
            </div>
          </div>
          <div className="words">
            <p>which word is <i>opposite</i> of youth?</p>
            <div className="box">
              <button>Adulthood</button>
              <p>or</p>
              <button>Neighborhood</button>
            </div>
          </div>
          <div className="level">
            <div><img src="../image.png" alt="i" /></div>
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
      </div>
    </div>
  )
}

export default App
