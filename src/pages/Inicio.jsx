import {React,useState} from 'react';
import "../styles.css";

function Inicio(){
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  const errors = {
    email: "invalido correo electrónico",
    password: "debe ser obligatorio"
  };

  

  const handleSubmit=(event)=>{
     event.preventDefault();
     var { email, password } = document.forms[0];

     if(password.value=="")
        setErrorMessages({ name: "password", message: errors.password });
      //else 
        //setIsSubmitted(true);
    
  }

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="email">
            Correo Electrónico</label>
            <input type="email" className="form-control" name="email" required />
            {renderErrorMessage("email")}
        </div>
        <div className="form-group">
          <label for="password">
            Contraseña</label>
            <input type="password" className="form-control" name="password"/>
            {renderErrorMessage("password")}
        </div>
        
          <input type="submit" value="Enviar" />
       
    </form>
     
  );
}
export default Inicio;