const initialState = [
  {
    id: 1,
    todo: "recolectar la piedra del alma",
    done: false,
  },
];
// Un recuer es una funcion pura que regresa un state, no se manipula el state se cambia
const todoReducer = (state = initialState, action = {}) => {
  //Regresar un nuevo estado
  if (action.type === "[TODO] add todo") {
    return [...state, action.payLoad];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  donde: false,
};

/* todos.push({
  id: 2,
  todo: "Recolectar la piedra del poder",
  donde: false,
}); */

const addTodoAction = {
  type: "[TODO] add todo",
  payLoad: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
