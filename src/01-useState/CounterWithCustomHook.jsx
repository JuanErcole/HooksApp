import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  
  const { counter, increment, decrement, reset } = useCounter();
  //aca deset. lo que retorna mi hook, en este caso es un obj {}, pero podria ser un array [] 
  

  return (
    <div>
        <h1>Counter With Hook: {counter}</h1>
        <hr />
        <button onClick={ ()=> increment(3)} className="btn btn-primary">+1</button>
        <button onClick={reset} className="btn btn-info">Reset</button>
        <button onClick={decrement}className="btn btn-primary">-1</button>
    </div>
  )
}
