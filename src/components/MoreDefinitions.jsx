
import React from 'react'
import SingleDefinition2 from './SingleDefinition2'

const MoreDefinitions = ({meanings, keys}) => {

  return (
    <div>
        {meanings.map((mean, x) =><div key={x}> <SingleDefinition2  {...mean}  /></div> )}
    </div>
  )
}

export default MoreDefinitions