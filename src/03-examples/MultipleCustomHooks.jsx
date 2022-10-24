import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  
  const { counter, increment } =  useCounter(1);
  const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const {author, quote} = !!data && data[0]; //si data tiene valor, entonces toma la primer posicion del arreglo --- Esto no seria necesario si me regresara un objeto en lugar de un arreglo


  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {/* {
        isLoading
          ? ( 
              <div className="alert alert-info text-center">
                loading 
              </div>
          )
          : ( 
              <blockquote className="blockquote text-end">
                <p className="mb-1">{quote}</p>
                <footer className="blockquote-footer mt-2">{author}</footer>  
              </blockquote>
            )
      } */}

      {
        isLoading
        ? <LoadingQuote/>
        : <Quote author={author} quote={quote}/>
      }

      <button
        className="btn btn-success" 
        onClick={ ()=> increment(1)} 
        disabled={isLoading}>
        Next quote
      </button>

    </div>
  )
}
