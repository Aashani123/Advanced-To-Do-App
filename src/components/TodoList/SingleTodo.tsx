import React from 'react';
import { Todo } from '../../model';
import { AiFillEdit } from 'react-icons/ai';

type Props = {
    todo: Todo,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    todos: Todo[];
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {
  return (
    <form className='todos_single'>
      <span className='todos_single_text'>{todo.todo}</span>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
      </div>
    </form>
  );
}

export default SingleTodo;