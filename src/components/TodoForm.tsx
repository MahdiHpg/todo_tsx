import { useRef, useState } from "react";

type TodoFormProps = {
  addNewTodo: (title: string) => boolean;
};

const TodoForm = ({ addNewTodo }: TodoFormProps) => {
  const [todoTitle, setTodoTitle] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (todoTitle.length > 0) {
      addNewTodo(todoTitle);
      setTodoTitle("");
      inputRef.current?.focus();
    }
  };

  return (
    <form className="TodoForm" onSubmit={submitHandle}>
      <input
        ref={inputRef}
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
