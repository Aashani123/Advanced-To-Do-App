import React from 'react'
import "./Todolist.css"
import { Todo } from '../../model'
import SingleTodo from './SingleTodo';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Todolist = ({todos,setTodos}:Props) => {
  return (
    <div className='todos'>
      {
        todos.map((todo) => (
            <div>
              <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
            </div>
        ))
      }
    </div>
  )
}

export default Todolist
