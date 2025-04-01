import React from "react";
import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent) => void;
}
const InputField = ({ todo, setTodo,handleAdd }: Props) => {
  return (
    <div>
      <form className="input" onSubmit={handleAdd}>
        <input
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
