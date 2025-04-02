import React, { useRef } from "react";
import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent) => void;
}
const InputField = ({ todo, setTodo,handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form className="input" onSubmit={(e) =>{
        handleAdd(e);
        inputRef.current?.blur(); // remove focus from input field
      } 
      }>
        <input
          ref={inputRef}
          type="text"
          value={todo}
          onChange={(e)=> setTodo(e.target.value)}
          placeholder="Enter your  tasks..."
          className="input_box"
        />
        <button className="input_submit" type="submit" >
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
