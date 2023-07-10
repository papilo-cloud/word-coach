
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react'
import { forwardRef } from 'react'

function Apps() {
   const [index, setIndex] = useState(0)
   const myRef = useRef(null)

   function addScroll() {
    if (index < images.length - 1) {
        setIndex(index + 1)
    } else {
        setIndex(0)
    }
    myRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
    })
   }
  return (
    <div>
        <button
        style={{position: 'fixed' }}
         onClick={addScroll}>Next</button>
       <ul style={{
        display: 'flex',
        gap: 10,
        paddingTop:40,
        listStyle:'none',
       }}>
        {images.map((imgs,i) => <li 
        style={{
            border: index === i? '10px solid #0076ff': '',
            padding:0
        }}
         ref={index === i? myRef : null}
         key={imgs.id}>
            <img src={imgs.imageUrl}></img>
        </li> )}
       </ul>
    </div>
  )
}

const images = [];

for (let i = 0; i < 10; i++) {
    images.push({
        id: i,
        imageUrl: `https://placekitten.com/250/200?image=${i}`
    });
    
}
console.log(images)

export default Apps;