import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { TodoType } from "../types/Todos.types";

const TodoMain = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  console.log(todos);

  const addNewTodo = (title: string) => {
    const newTodo: TodoType = {
      id: crypto.randomUUID(),
      title: title,
      isComplete: false,
    };

    setTodos([...todos, newTodo]);

    return true;
  };

  const removeTodo = (todoID: string) => {
    const filterTodos = todos.filter((todo) => todo.id !== todoID);

    setTodos(filterTodos);

    return true;
  };

  const completedTodoHandle = (todoID: string) => {
    const getTodo = todos.map((todo) =>
      todo.id === todoID ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(getTodo);

    return true;
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo List ❤️ </h1>
      {/* Add New Todo Form */}
      <TodoForm addNewTodo={addNewTodo} />

      {/* display todos */}
      {todos &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completedTodoHandle={completedTodoHandle}
          />
        ))}
    </div>
  );
};

export default TodoMain;
