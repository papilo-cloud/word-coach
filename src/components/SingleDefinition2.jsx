
import React, { useState } from 'react'
import Similar from './Similar'

const SingleDefinition2 = ({partOfSpeech, definitions, synonyms, antonyms}) => {

  return (
    <div>
        <div className='single'>
            <span><i>{partOfSpeech}</i></span>
            <div className="pad">
                { definitions.map((def, i) => <ul key={i} ><li>
                {def.definition}<br />{def.example &&<span className='usage'>"{def.example}"</span>} </li></ul>)}
                <Similar antonyms={antonyms} synonyms={synonyms} />
            </div>
        </div>
    </div>
  )
}

export default SingleDefinition2