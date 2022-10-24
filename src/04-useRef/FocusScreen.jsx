import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef();
  

  const onFocus = ()=> inputRef.current.select();


  //const onFocus = ()=> document.querySelector('input').select();


  return (
    <div>
        <h1>Focus Screen</h1>
        <hr />

        <input 
          ref={ inputRef }
          type="text"
          placeholder="ingrese su nombre"
          className="form-control" 
        />

        <button className="btn btn-dark mt-2" onClick={ onFocus }>
          Focus
        </button>
    </div>
  )
}
