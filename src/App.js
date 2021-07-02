import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './components/form';
import ToDoList from './components/toDoList';


function App() {
  
  const[inputText,setInputText]=useState("");
  const[toDos,setToDos]=useState([]);
  const[status,setStatus]=useState('all');
  const[filterToDos, setFilterToDos]=useState([]);

 

  const filterHandler = () => 
  {
    switch(status)
    {
      case "completed":
        setFilterToDos(toDos.filter((toDo)=>toDo.completed===true));
        break;
      case "uncompleted":
        setFilterToDos(toDos.filter((toDo)=>toDo.completed===false));
        break;
      default:
        setFilterToDos(toDos);
        break;
    }
  }

  const saveLocalToDos=()=>
  {
      localStorage.setItem('toDos',JSON.stringify(toDos));
  }

  const getLocalStorage =()=>
  {
    if(localStorage.getItem('toDos')===null)
    {
      localStorage.setItem('toDos',JSON.stringify([]));
    }
    else
    {
      let toDosLocal=JSON.parse(localStorage.getItem('toDos'));
      setToDos(toDosLocal);
    }
  }

  useEffect(()=>
  {
    getLocalStorage();
  },[]);

  useEffect(()=>
  {
    filterHandler();
    saveLocalToDos();
  },[toDos,status]);
  
  return (
    <div className="App">
      <header>
        <h1>
          My ToDo List
        </h1>
      </header>
      <Form  
      inputText={inputText} 
      toDos={toDos} 
      setToDos={setToDos} 
      setInputText={setInputText}
      status={status}
      setStatus={setStatus} />
      <ToDoList setToDos={setToDos} toDos={toDos}      
      filterToDos={filterToDos}/>
    </div>
  );
}

export default App;
