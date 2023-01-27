import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      {/* TodoList onNewTodo(todo) */}
      {/* {id:new date()..., description:'', done: false} */}
      <ul className="list-group">
        {todos.map((todo) => (
          //TodoItem ...
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        ))}
      </ul>
      {/* Fin TodoList */}
    </>
  );
};
