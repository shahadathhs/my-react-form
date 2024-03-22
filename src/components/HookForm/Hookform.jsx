import useInputState from "../../hooks/useInputState";

const Hookform = () => {

  // const [name, setName] = useInputState(null); for type-1

  const emailState = useInputState('rojoni@sojoni.go')


  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(name); for type-1
    console.log(emailState.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={setName}
        className="border-2" type="text" name="name" /> */}
        <br />
        <input {...emailState}
        className="border-2" type="email" name="email" />
        <br />
        <input className="border-2" type="password" name="password" />
        <br />
        <input className="border-2" type="submit" value="Submit" />      
      </form>
    </>
  );
};

export default Hookform;