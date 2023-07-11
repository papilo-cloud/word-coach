import React from 'react'
import Similar from './Similar'
import Disimilar from './Dissimilar'

const Definition = ({partOfSpeech, definitions}) => {
  return (
    <div>
        <span><i>{partOfSpeech}</i></span>
        <div className="pad">
            {definitions.map((def, i) => <> <p>{def.definition}</p>
            <p className='usage'>"{def.example}"</p> </> )}
            
            <Similar />
            <Disimilar />
            <ul>
            <li>definition 2 <br />
                <span className='usage'>"usage2"</span> 
            </li>
            </ul>
        </div>
    </div> 
  )
}

export default Definition