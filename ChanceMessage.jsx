import React from 'react'

const ChangeMessage = ({ handleMessage }) => {
  const messages = ["Oi", "Olá", "Tudo bem?"]

  return (
    <div>
      {messages.map((msg, index) => (
        <button key={index} onClick={() => handleMessage(msg)}>
          {index + 1}
        </button>
      ))}
    </div>
  )
}

export default ChangeMessage
