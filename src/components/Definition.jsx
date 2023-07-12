import React, { useState } from 'react'
import Disimilar from './Dissimilar'
import SingleDefinition from './SingleDefinition'
import MoreDefinitions from './MoreDefinitions'

const Definition = ({data}) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
    {data[0].meanings.map((mean, x) => <SingleDefinition {...mean} key={x} /> )} 
    
    {showMore && data.slice(1).map((data, x) => <div>
        <p>Definition: {x+2}</p><MoreDefinitions {...data} />
      </div> 
      )} 
    {
      data.length> 1 && <div>
        <button onClick={() => setShowMore(!showMore)}>Show More</button>
      </div>
    }
    </>
  )
}

export default Definition