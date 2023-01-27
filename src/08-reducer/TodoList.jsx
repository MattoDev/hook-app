import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo }) => {
  return (
    <>
      {/* TodoList onNewTodo(todo) */}
      {/* {id:new date()..., description:'', done: false} */}
      <ul className="list-group">
        {todos.map((todo) => (
          //TodoItem ...
          <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
        ))}
      </ul>
      {/* Fin TodoList */}
    </>
  );
};
