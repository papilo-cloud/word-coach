
import React, { useState , useEffect} from 'react'

const InputSearch = () => {
 

     
  return (
    <>
        <form onSubmit={handleSubmit}>
            <label>
              <input
               type="text" 
               value={text}
               onChange={handleChange}
               placeholder='Search for word' />
            </label>
        </form>
    </>
  )
}

export default InputSearch