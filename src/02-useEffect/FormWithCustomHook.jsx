import { useForm } from "../hooks/useform";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

  const {formState, onInputChange, onResetForm} = useForm({
    username: '',
    email: '',
    password: ''
  })

  const { username, email, password } = formState;

  return (
    <div>
        <h1>Formulario con custom Hook</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"  
            value={username}
            onChange={  onInputChange }
        />

        {(username === 'Juan2') && <Message/>}
        
        <input 
            type="email"
            className="form-control mt-2"
            placeholder="Username@gmail.com"
            name="email"  
            value={email}
            onChange={  onInputChange }
        />

        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"  
            value={password}
            onChange={  onInputChange }
        />

        <button onClick={ onResetForm } className="btn btn-danger mt-2"> Reset </button>


    </div>
  )
}
