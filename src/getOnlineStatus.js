
import React, {useState, useEffect} from 'react'

export const getOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(false)
  
    useEffect(() => {
      function handleOnline(params) {
        setIsOnline(true)
      }
      function handleOffline(params) {
        setIsOnline(false)
      }
  
      window.addEventListener('online', handleOnline)
      window.addEventListener('offline', handleOffline)
    
      return () => {
        window.removeEventListener('online', handleOnline)
        window.removeEventListener('offline', handleOffline)
      }
    }, [])
    return isOnline
}
