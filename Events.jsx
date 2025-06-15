import React from 'react'

const Events = () => {

    const handleClick = () => {
        console.log("Executou");
    };

    const renderSomething = (x) => {
        if(x) {
            return <h1>Rendelizando isso!</h1>
        } else {
            return <h1>Rendelize outra coisa</h1>
        }
        };
       // return antecipado
       // return 10 > 2 && <p>Carregando...</p>
    
  return (
    <div>
        <button onClick={() => console.log("Testando um evento")}>Clique aqui</button>
   <br></br> <br></br><br></br>
          <button onClick={handleClick}>Clique aqui com Função</button>
       
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events