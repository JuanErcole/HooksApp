import { useLayoutEffect, useRef, useState } from "react";


export const Quote = ({author, quote}) => {

  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({width: 0, height: 0 });
 
  useLayoutEffect(() => {
    const {width, height} = (pRef.current.getBoundingClientRect()); // getBoundingClientRect() para ver toda la info del elemento 
    setBoxSize({width, height}); 
  }, []);

  return (
    <>
      <blockquote ref={pRef} className="blockquote text-end" style={{ display: 'flex'}}>
        <p className="mb-1">{quote}</p>
        <footer className="blockquote-footer mt-2">{author}</footer>  
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
