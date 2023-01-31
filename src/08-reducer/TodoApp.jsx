import { useTodo } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  //useTodo
  //todos, handleDeleteTodo, handleToggleTodo, handleNewTodo
  //

  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp {todosCount}
        <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7"></div>
        <TodoList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleToggleTodo}
        />
        <div className="col-5">
          <h4 className="mt-3">Agregar TODO</h4>
          <hr />
          {/* TodoAdd */}
          <TodoAdd onNewTodo={handleNewTodo} />
          {/* Fin TodoAdd */}
        </div>
      </div>
    </>
  );
};
