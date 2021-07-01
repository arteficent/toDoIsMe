import React,{useState} from 'react';
import './App.css';
import Form from './components/form';
import ToDoList from './components/toDoList';


function App() {
  
  const[inputText,setInputText]=useState("");
  const[toDos,setToDos]=useState([]);

  
  return (
    <div className="App">
      <header>
        <h1>
          My ToDo List
        </h1>
      </header>
      <Form  inputText={inputText} toDos={toDos} setToDos={setToDos} setInputText={setInputText} />
      <ToDoList setToDos={setToDos} toDos={toDos}/>
    </div>
  );
}

export default App;
https://youtu.be/pCA4qpQDZD8?t=3671
