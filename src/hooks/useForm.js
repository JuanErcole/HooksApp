import { useState } from "react";


export const useForm = ( initialForm = {} ) => {
  
  const [formState, setFormState] = useState(initialForm)

  const onResetForm = () => setFormState(initialForm);

  const onInputChange = ({target})=>{
    const {name, value} = target;
    setFormState({
      ...formState,
      [name]: value //con [] le digo que va a cambiar el valor de la propiedad name x el value
    })    
  };

  return {
    formState,
    onInputChange,
    onResetForm
  }
  
}
