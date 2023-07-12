
import React from 'react'
import SingleDefinition2 from './SingleDefinition2'

const MoreDefinitions = ({meanings}) => {

  return (
    <div>
        {meanings.map((mean, x) =><div> <SingleDefinition2 key={x} {...mean}  /></div> )}
    </div>
  )
}

export default MoreDefinitions