import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from './todoReducer'

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar gema del alma',
    done: false,
  },
  {
    id: new Date().getTime() + 3,
    description: 'Recolectar gema del viento',
    done: false,
  },
];

export const TodoApp = () => {


  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const handleNewTodo = (todo) =>{
    console.log(todo);
  }

  return (
    <div>
        <h1>TodoApp () <small>Pendientes: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
              <TodoList todos={ todos }/>
              {/* <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between">
                  <span className="align-self-center">item 1</span>
                  <button className="btn btn-danger">BORRAR</button>
                </li>  
              </ul> */}

            </div>
          

          <div className="col-5">
            <h4>Agregar TODO</h4>
            <hr />
            <TodoAdd onNewTodo={ handleNewTodo }/>
            {/* <form action="">
              <input 
                type="text" 
                placeholder="¿Que hay que hacer?"
                className="form-control"
              />

              <button type="submit" className="btn btn-outline-primary mt-2">
                Agregar
              </button>
            </form> */}
          </div>
        </div>
    </div>
  )
}
