
 const Form = ({status= 'error'}) => {

  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status == 'success') {
    return <h1>That's right!</h1>
  }
  return (
    <div>
      <h1>city qiuz</h1>
      <p>In which city is there a billboard that turns air into drinkable</p>
      <form >
        <textarea disabled={
          status == 'submitting'
        } />
        <br />
        <button disabled={
          status == 'empty' ||
          status == 'submitting'
        }>
          Submit
        </button>
        {
          status == 'error' && 
          <p className="error">
            Good guess but a wrong answer. Try again!
          </p>
        }
      </form>
    </div>
  )
}

let statuses = [
  'empty'
  ,
  'typing'
  ,
  'submitting'
  ,
  'success'
  ,
  'error'
  ,
  ];
  

export const Apps = () => {
  return (
    <div>
      {statuses.map(status => <section>
        <h4>Form ({status}):</h4>
        <Form status={status} />
      </section> )}
    </div>
  )
}
