
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import { forwardRef } from 'react'

function itemize(text) {
    const letters = text.split('')
        .filter(l => l !== ' ')
        .reduce((collection, item) => {
            const letter = item.toLowerCase();
            return {
                ...collection,
                [letter]: (collection[letter] || 0) + 1
            }
        }, {})
    return Object.entries(letters)
            .sort((a, b) => b[1] - a[1]);

}

function CharacterMap({ text }) {

    
    return(
     <div>
     Character Map:
     {itemize(text).map(txt => <div key={txt[0]}>
        {txt[0]}:{txt[1]}
     </div> )}
     </div>
     )
    }
    

function Apps() {

  return (
    <div style={{
        width: 300,
        height: 1000,
        backgroundColor: 'red',
    }}>
        <label htmlFor='text'>
            <textarea name="text" id="text" cols="300" rows="10"></textarea>
        </label>
    </div>
  )
}


export default Apps;