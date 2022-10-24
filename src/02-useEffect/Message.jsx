import { useEffect } from "react"

export const Message = () => {

  useEffect(() => {
    
    const onMouseMove = (event)=>console.log(event.x, event.y);

    window.addEventListener('mousemove', onMouseMove)
    /* console.log('Se monto'); */
  
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      /* console.log('Se desmonto'); */
    }
  },[])
  

  return (
    <div className="mt-2">
        <h3>Usuario ya existe.</h3>
    </div>
  )
}
