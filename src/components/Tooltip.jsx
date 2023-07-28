import React, { useState } from 'react'

const Tooltip = () => {
  const [tooltip, setTooltip] = useState(false)

  function handleClick() {

    if (audio) {
        return;
    } else {
      setTooltip(true)
      setTimeout(() => {
        setTooltip(false)
      }, 2000);
    }
  }



  return (
    <div className="tooltip" style={{
        display:tooltip? 'block': 'none'}}>
        <span></span>
        <p className='pp'>Not available</p>
    </div>
  )
}

export default Tooltip