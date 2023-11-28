import React, { useState } from 'react'

export const useFormInput = (initial) => {
  const [name, setName] = useState(initial)
  function handleChange(e) {
    setName(e.target.value )
  }

  const initProps = {
    name,
    onchange: handleChange,
    sex: name,
    title: name
  }
  return initProps;
}
