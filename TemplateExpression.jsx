
//rfce
import React from 'react'

function TemplateExpression() {
    const name = "Kethely"
    const data = {
        age: 18,
        job:"Desenvolvedora Front-End"
    }
  return (
    <div>
        <p>A soma é {2+2} </p>
        <h3>Bem-Vindo {name} </h3>
        <p>Sua idade é {data.age} e a profissão é {data.job}</p>
    </div>
  )
}

export default TemplateExpression