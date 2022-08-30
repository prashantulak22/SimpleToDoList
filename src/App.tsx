import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import TodoTable from './components/TodoTable';
import {Todo} from './Model'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  // const [edit, setEdit] = useState<boolean>(false);
  // const [editTodo, setEditTodo] = useState<string>(todo);

  const postData = (e: React.FormEvent) =>{
      e.preventDefault();
      axios.post(`https://614a90aa07549f001755a94e.mockapi.io/todolist`,{
          todo,
      }).then(() => {
        getData();
    }).then(() => setTodo(""))
    
  }

  const [APIData, setAPIData] = useState<Todo[]>([]);
  useEffect(() => {
      axios.get(`https://614a90aa07549f001755a94e.mockapi.io/todolist`)
          .then((response) => {
              setAPIData(response.data);
          })
  }, []);


  const setData = (data:Todo) =>{



  }


  const onDelete = (id:number) => {
      axios.delete(`https://614a90aa07549f001755a94e.mockapi.io/todolist/${id}`)
      .then(() => {
          getData();
      })
  };

  const getData = () => {
      axios.get(`https://614a90aa07549f001755a94e.mockapi.io/todolist`)
          .then((getData) => {
              setAPIData(getData.data);
          })
  }

  const handleDone = (id:number) =>{
      setAPIData(APIData.map((data) => data.id === id?{...data, isDone:!data.isDone}: data))
  }

  return (
    <div>
      <h2 className="main-header"> Todo List </h2>
      <div className="main">
        <CreateTodo postData={postData} setTodo={setTodo} todo={todo} />          
        <TodoTable   APIData={APIData}   setData={setData} onDelete={onDelete} handleDone={handleDone} />
      </div>
    </div>
  );
}

export default App;
