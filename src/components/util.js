import axios from "axios";

export const util = () => {
let rndm = [];
//   return (
    for (let i = 0; i < 80; i++) {
        const url = 'https://api.api-ninjas.com/v1/randomword'
        const config = {
          headers: { 'X-Api-Key': 'd9rMZOyeZqmyL1k/mb1ooA==hWCnGvBuR0DK59QP'} 
        };
        axios.get(url, config)
        .then(res=> {
          const url1 = `https://api.api-ninjas.com/v1/thesaurus?word=${res?.data?.word}`
          const config1 = {
            headers: { 'X-Api-Key': 'd9rMZOyeZqmyL1k/mb1ooA==hWCnGvBuR0DK59QP'} 
          };
          axios.get(url1, config1)
          .then(res=> {if (res?.data?.synonyms?.length >1 && res?.data?.antonyms?.length >1) {
            return rndm.push(res?.data?.word)
          }})
        } )
        // .catch(err=> console.log(err.message))
        
    }
    return rndm
//   )
}
