import React, { useEffect, useState } from 'react'
import speaker from '../assets/speaker.svg'

const Speaker = ({audio}) => {

console.log(audio)
    return (
    <div className="speaker">
        <img src={speaker} alt="speaker" />
        <audio src={audio} controls></audio>
    </div>
  )
}

export default Speaker