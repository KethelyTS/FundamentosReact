import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Ket", "Lucas", "Mimosa"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Lucas", age: 19 },
    { id: 2, name: "Kethely", age: 18 },
    { id: 3, name: "Mimosa", age: 1 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1; //remover aleatoriamente um usuário da lista
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== randomNumber)
    );
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  );
};

export default ListRender;
