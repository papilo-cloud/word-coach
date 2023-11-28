
import React, { useEffect, useRef, useState } from 'react';
import Speaker from './Speaker'
import Definition from './Definition';

const WordDefinition = ({data, audio}) => {
  
    return (
      <>
        {data.title?(
          <div className="nothing"> 
            <h2>{data.title}</h2>
            <p>{data.message}</p>
            <p>{data.resolution}</p>
          </div>
        ):(
          <div className="def">
            <div className="meaning"> 
              <Speaker audio={audio} />
              <p>{data[0]?.word}
              <br /><span>{data[0]?.phonetics.length == 0? data[0]?.phonetic: data[0]?.phonetics[0].text}</span>
              </p>
            </div>
            <div className="definition">
              <Definition data={data} />
            </div>
          </div>
        )}
      </>
   
  )
}

export default WordDefinition