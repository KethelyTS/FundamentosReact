import {useState} from 'react'

const Data = () => {
    let someData = 50;

    const [anotherNumber, setAnotherNumber] = useState(15)
  return (
    <div>
     <div>
     <p>Valor: {someData}</p>
     <button onClick={() => (someData = 15)}>Mudar Variavel</button>
     <p>Valor: {anotherNumber}</p>
     <button onClick={() => setAnotherNumber (20)}>Mudar state</button>
     </div>
     </div>
  )
}

export default Data