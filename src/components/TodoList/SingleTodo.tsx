import React, { useState } from 'react';
import { Todo } from '../../model';
import { AiFillEdit } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDeleteLeft, faEdit, faRightLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import "./todolist.css";

type Props = {
    todo: Todo,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    todos: Todo[];
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map((todo) => 
      todo.id === id ? {...todo, todo: editTodo} : todo
    ));
    setEdit(false);
  };

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => 
      todo.id === id ? {...todo, isDone: !todo.isDone} : todo
    ));
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form className='todos_single' onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos_single_text"
          autoFocus
        />
      ) : todo.isDone ? (
        <s className='todos_single_text'>{todo.todo}</s> 
      ) : (   
        <span className='todos_single_text'>{todo.todo}</span>
      )}
      
      <div>
        <span className="icon" onClick={() => {
          if (!edit && !todo.isDone) {
            setEdit(!edit);
          }
        }}>
          <FontAwesomeIcon icon={faEdit} />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <FontAwesomeIcon icon={faCheck} />
        </span>
      </div>
    </form>
  );
}

export default SingleTodo;