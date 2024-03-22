import { useState } from "react";

const StateFulForm = () => {
  
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    // console.log(name, email, password);
    if(password.length < 6){
      setError('Password must be 6 characters or longer')
    }
    else{
      setError('');
      console.log(name, email, password);
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} required
        className="border-2" type="text" name="name" />
        <br />
        <input onChange={handleEmailChange} required
        className="border-2" type="email" name="email" />
        <br />
        <input onChange={handlePasswordChange} required
        className="border-2" type="password" name="password" />
        <br />
        <input className="border-2" type="submit" value="Submit" /> 
        {
          error && <p>{error}</p>
        }     
      </form>
    </div>
  );
};

export default StateFulForm;