import React from 'react'
import Similar from './Similar'


const SingleDefinition = ({partOfSpeech, definitions}) => {
  return (
    <div>
        <div className='single'>
            <span><i>{partOfSpeech}</i></span>
            <div className="pad">
                { definitions.map((def, i) => <ul key={i} ><li>
                {def.definition}<br />{def.example &&<span className='usage'>"{def.example}"</span>} </li></ul>)}
                <Similar antonyms={definitions} />
            </div>
        </div>
    </div>
  )
}

export default SingleDefinition