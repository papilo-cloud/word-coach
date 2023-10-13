import { useState } from 'react';
import {Card} from './Card'
// import { getUserImage } from './getUserImage';

function Button({children, onlcick}) {
  return(
    <button onClick={onlcick}>
      {children}
    </button>
  )
}

function Playbtton({message}) {
  function handleClick() {
    alert(`Playing ${message}`)
  }
  return(
    <Button onlcick={handleClick}>
      Play "{message}"
    </Button>
  )
}
function UploadButton() {
  return(
    <Button onlcick={()=> alert('uploading')}>
      upload image
    </Button>
  )
}


export function Apps() {
  
  const [index, setIndex] = useState(0)
  const [cart, setCart] = useState([])

  function updateIndex() {
    setCart(c => c.push('hello'))
  }
  {console.log(typeof cart)}
  
  return (
    <div>
      <p>{cart}</p>
      <button onClick={updateIndex}>update</button>
      {index}
    </div>
  )
}

function Profile({person}) {
  return(
      <div className="app">
        <h2>{person.name}</h2>
        <img
        src={getUserImage(person)}
        />
      </div>
  )
}




// export default Apps;