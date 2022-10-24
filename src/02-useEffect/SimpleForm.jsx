import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'Juan',
    email: 'juan@gmail.com'
  })

  const {username, email} = formState;

  const onInputChange = ({target})=>{
    
    const {name, value} = target;
    
    setFormState({
      ...formState,
      [name]: value //con [] le digo que va a cambiar el valor de la propiedad name x el value
    })    
  };

  useEffect(() => {
    /* console.log('useEffect called'); */
  },[]);

  useEffect(() => {

    /* console.log('formState cambio'); */
 
  },[formState]); // Otro efecto para cuando solo el formulario (formState) cambie
  
  useEffect(() => {
    /* console.log('email changed'); */
  },[email]);

  return (
    <div>
        <h1>Formulario Simple</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"  
            value={username}
            onChange={  onInputChange }
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="Username@gmail.com"
            name="email"  
            value={email}
            onChange={  onInputChange }
        />

        {(username === 'Juan2') && <Message/>}

    </div>
  )
}
