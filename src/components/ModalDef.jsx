
import Speaker from './Speaker'
import image from '../assets/cross.svg'

const ModalDef = ({audio, words}) => {
console.log(words)
    
  return (
    <>
        {words.length > 0 &&
        <div className='modal'>
                <div className="inner">
                    <div className="tops">
                        {/* <div> */}
                            <Speaker audio={audio} />
                            <p className='p'>{words[0].word }</p>
                        {/* </div> */}
                        <span>
                            <img src={image} alt="cancel" />
                        </span>
                    </div>
                    <div className="body">
                        <p>{words[0].meanings[0].definitions[0].definition}</p>
                    </div>
                </div>
                <button className='btn'>full definition</button>
        </div>
    }
    </>
  )
}

export default ModalDef