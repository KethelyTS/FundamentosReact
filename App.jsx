import { useState } from 'react';
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import './App.css';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import image from './assets/image.png';
import Data from './components/Data';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChanceMessage from './components/ChanceMessage';

const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "Kia", color: "Branco", km: 2000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

function App() {
  const [count, setCount] = useState(0);

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <div className="App" style={{ paddingBottom: "500px" }}>
        <h1>Hello World</h1>
        <p>My name is Kethely and I am learning React JS</p>

        <FirstComponent />
        <TemplateExpression />
        <MyComponent />
        <Events />
        <Data />
        <ListRender />
        <ConditionalRender />
        <ShowUserName name="Kethely" />

        <CarDetails brand="VW" km={999} color="red" />
        <CarDetails brand="Toyota" km={1500} color="gray" />
        <CarDetails brand="Audi" km={999} color="black" />

        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
          />
        ))}

        <Fragment />

        <Container>
          <p>Estou usando children para container</p>
        </Container>

        <ExecuteFunction myFunction={showMessage} />

        {/* Aqui o componente Message recebe a mensagem via props */}
        <Message msg={message} />

        {/* Este componente altera a mensagem exibida acima */}
        <ChanceMessage handleMessage={handleMessage} />

        <br /><br /><br /><br />

        <img src="/imagem.jpg" alt="Noite em algum lugar" />
        <img src={image} alt="Lula Molusco" />
      </div>
    </>
  );
}

export default App;
