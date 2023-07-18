import SectionLogin from "./SectionLogin";
import { useState } from "react";


function Register ({ name, handleRegister}) {

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  function onRegister(event) {
    event.preventDefault();
    handleRegister()
  }

  
  return(
    <SectionLogin name={name} onSubmit={onRegister} />
  )
};

export default Register;