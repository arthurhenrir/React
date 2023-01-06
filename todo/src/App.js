import './App.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from "react-icons/bs";

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState ("");
  const [todos, setTodos] = useState ([]);
  const [loading, setLoading] = useState (false);  

  const handleSubmit = async (e) => {
    e.preventDefault(); //e previne que a pagina seja recarregada ao enviar 

    //const promise = await axios.get(`${API}/data/db.json`);

    await axios.post(API + "/todos", {title, time})
               .then((res) => {console.log(res)})
               .catch((error) => {console.log(error)});

    setTitle("");
    setTime("");
  }

  return (
    <div className="App">
      <div className="todo-header">
        <h1>React Todo</h1>
      </div>
      <div className="form-todo">
        <h2>Insira a sua proxima tarefa:</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="title">Tarefa</label>
            <input
              type="text"
              name="title"
              placeholder="Titulo da tarefa"
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="time">Duração</label>
            <input
              type="text"
              name="time"
              placeholder="Tempo em horas"
              onChange={(e) => setTime(e.target.value)}
              value={time || ""}
              required
            />
          </div>
          <input type="submit" value="Criar Tarefa"/>
        </form>
      </div>
      <div className="list-todo">
        <p>Lista de tarefas:</p>
        {todos.length === 0 && <p>Não há tarefas!</p>}
      </div>
    </div>
  );
}

export default App;
