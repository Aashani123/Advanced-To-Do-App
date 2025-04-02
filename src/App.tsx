import React, { useEffect, useState } from 'react';
import './App.css';
import InputField from './components/InputField/InputField';
import { Todo } from './model';
import Todolist from './components/TodoList/Todolist';

const App: React.FC = () => {

  const [todo,setTodo] = useState<string>("")
  // contain all todos
  const [todos,setTodos] =useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if(todo){
      // add todo to the list
      setTodos([...todos,{id:Date.now(), todo, isDone:false}])
      setTodo("");
    }
  }

  console.log(todos)

  return (
    <div className="App">
     <span className='heading'>Taskify</span>
     <InputField todo={todo} setTodo={setTodo} handleAdd = {handleAdd}/>
     <Todolist todos={todos} setTodos={setTodos}/>

    </div>
  );
}

export default App;
 