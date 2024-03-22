const SimpleForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log("Submitted");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="border-2" type="text" name="name" />
        <br />
        <input className="border-2" type="email" name="email" />
        <br />
        <input className="border-2" type="password" name="password" />
        <br />
        <input className="border-2" type="submit" value="Submit" />      
      </form>
    </div>
  );
};

export default SimpleForm;