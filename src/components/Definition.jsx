import React from 'react'
import Similar from './Similar'
import Disimilar from './Dissimilar'

const Definition = ({partOfSpeech, definitions}) => {
    const short = (definitions.slice(0,1).map((def, i) => <div key={i}> <p>{def.definition}</p>
    <p className='usage'>"{def.example}"</p> </div> ))
    const long = (
         definitions.slice(1).map((def, i) => <ul key={i} ><li>
            {def.definition}<br /><span className='usage'>"{def.example}"</span> </li></ul>)
    )
    const total = short + long
    console.log(total)
  return (
    <div>
        <span><i>{partOfSpeech}</i></span>
        <div className="pad">
            {definitions.length > 1? long : short}
        </div>
    </div> 
  )
}

export default Definition