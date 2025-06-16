import React from 'react'

const ConditionalRender = () => {
    const x= true;

    const name = "Kethely"
  return (
    <div>
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true sim!</p>}
      
        <h3>Render ternário</h3>
        {name === "Maria" ? (
            <div>
                <p>Olá Maria</p>
                </div>
        ) : (
            <div> <p>Nome nao encontrado!</p></div>
        )}
    </div>
  )
}
 // condicao ? execucao1 : execucao2
export default ConditionalRender