import { useState } from 'react'
import './App.css'
import { CreateTodo } from '../components/CreateTodo'
import { Todos } from '../components/todos'


function App() {
    const [todos, setTodos] = useState([]);
    fetch("http://localhost:3000/todos") //wrong way cause 
      .then(async function(res) {         //every time app re renders this will be called
        const json = await res.json();    // and then agai state will change and again re render
        setTodos(json.todos);
      })

  return (
    <div>
    <CreateTodo></CreateTodo>
   <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
