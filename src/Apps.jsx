
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import { forwardRef } from 'react'
import { motion } from "framer-motion";

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
    
    const variants = {
        open: { opacity: 1, x: 0 },
      }

function Apps() {
    const [mon, setMon] = useState(false)

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{  delay: .3 }}
    >
        <h1>hello</h1>
        <div>
            <button onClick={() => setMon(!mon)}>click me</button>
        </div>
    </motion.div>
  )
}


export default Apps;