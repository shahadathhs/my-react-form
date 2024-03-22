import { useRef } from "react";
import { useEffect } from "react";

const REfForm = () => {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect( () =>{
    nameRef.current.focus();
}, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef}
        className="border-2" type="text" name="name" />
        <br />
        <input ref={emailRef} defaultValue={'sajib@gmail.com'}
        className="border-2" type="email" name="email" />
        <br />
        <input ref={passwordRef}
        className="border-2" type="password" name="password" />
        <br />
        <input className="border-2" type="submit" value="Submit" />      
      </form>
    </div>
  );
};

export default REfForm;