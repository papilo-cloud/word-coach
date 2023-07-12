
import React from 'react'
import SingleDefinition2 from './SingleDefinition2'

const MoreDefinitions = ({meanings}) => {

  return (
    <div>
        {meanings.map((mean, x) =><div> <SingleDefinition2 {...mean} key={x} /></div> )}
    </div>
  )
}

export default MoreDefinitions