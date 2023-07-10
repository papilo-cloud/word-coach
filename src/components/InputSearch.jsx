
import React, { useState , useEffect} from 'react'

const InputSearch = ({findWord}) => {
    const [text, setText] = useState('')
    const [words, setWords] = useState([])

    const dataApi = async()=>{
      const data = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`
      );
      const dataJ = await data.json();
      setWords(dataJ);
    }

    useEffect(() => {
        dataApi();
      }, []);

  function handleChange(e) {
        setText(e.target.value)
    }
    function handleSubmit(e) {
      //   e.preventDefault();
      //   if (text.trim().length == 0) {
      //       alert('Enter a word')
      //   } else {
      //       findWord(words)
      //       setText('')
      //       dataApi();
      // }
      setText('')
            dataApi();
    }
   
    
      
      console.log(words)

     
  return (
    <>
        <form>
            <label>
              <input
               type="text" 
               value={text}
               onChange={handleChange}
               placeholder='Search for word' />
            </label>
            <button onClick={handleSubmit}>search</button>
        </form>
    </>
  )
}

export default InputSearch