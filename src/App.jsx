import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className="class">
        <div className="search">
          <h1>Dictionary</h1>
          <form>
            <input type="text" placeholder='Search for word' />
          </form>
          <div className="definition">
            <div className="meaning">
              <img src="../image.png" alt="" />
              <p>alchemy <span>/'alkemi/</span></p>
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
