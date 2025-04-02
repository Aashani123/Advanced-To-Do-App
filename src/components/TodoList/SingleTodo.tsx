import React from 'react';
import { Todo } from '../../model';
import { AiFillEdit } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDeleteLeft, faEdit, faRightLeft, faTrash } from '@fortawesome/free-solid-svg-icons';

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
        <FontAwesomeIcon icon={faEdit} />
        </span>
        <span className="icon">
        <FontAwesomeIcon icon={faTrash} />
        </span>
        <span className="icon">
        <FontAwesomeIcon icon={faCheck} />
        </span>
      </div>
    </form>
  );
}

export default SingleTodo;