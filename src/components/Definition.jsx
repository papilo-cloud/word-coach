import React, { useState } from 'react'
import SingleDefinition from './SingleDefinition'
import MoreDefinitions from './MoreDefinitions'
import arrow from '../assets/down-arrow.svg'
import { useEffect } from 'react'


const Definition = ({data}) => {
  const [showMore, setShowMore] = useState(false)

  return ( 
    <>
    {data.length > 1  && <p className='num'>Meaning: 1</p> }
    {data[0]?.meanings.map((mean, x) => <SingleDefinition {...mean} key={x} /> )} 
    
    {showMore && data.slice(1).map((data, x) => <div key={x}>
        <p className='num'>Meaning: {x+2}</p><MoreDefinitions key={x} {...data} />
      </div> 
      )} 
    {
      data.length> 1 && <div className='show-more'>
        <button onClick={() => setShowMore(!showMore)}>
          {showMore? 'Show Less' : 'Show More'}
          <img src={arrow} alt="down carret" style={{
            transform: showMore? 'rotateX(180deg)': ''
          }} />
          </button>
      </div>
    }
    </>
  )
}

export default Definition