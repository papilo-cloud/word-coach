import React, { useEffect, useState } from 'react'

export const useCounter = () => {
    const [counter, setCounter] = useState(0)
    
    useEffect(() => {
      const counterId = setInterval(() => {
        setCounter(c => c + 1);
      },1000);
      return () => clearInterval(counterId)
    },[])
    return counter;
}
