import { TodoType } from "../types/Todos.types";

type TodoItemProps = {
  todo: TodoType;
  removeTodo: (id: string) => boolean;
  completedTodoHandle: (id: string) => boolean;
};

const TodoItem = ({ todo, removeTodo, completedTodoHandle }: TodoItemProps) => {
  return (
    <div className="Todo">
      <p
        onClick={() => completedTodoHandle(todo.id)}
        className={`${todo.isComplete === true && "completed"} todoTitle`} // or completed className
      >
        {todo.title}
      </p>
      <div>
        <span onClick={() => removeTodo(todo.id)}>🗑️</span>
      </div>
    </div>
  );
};

export default TodoItem;
