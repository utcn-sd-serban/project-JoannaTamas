import React from "react";
import 'bootstrap/dist/css/bootstrap.css';




const LoginUser = ({username,password, onLoginPatient,onLoginDentist,onCheck }) => (
  <div class="col-sm-6 offset-sm-3 text-center">
  <div class="jumbotron jumbotron-fluid">


  <div class="container">
 
<div class="info alert-dismissible fade show " role="alert">

  
  <h2>Login to your account </h2>
 
  <div>
  
  <div class="form-group">
  <label>Username: </label>
        <input type="username" class="form-control" id="user"value={ username} 
          onChange={ e => onCheck("username", e.target.value) } />
  </div>
  <div class="form-group">
  <label>Password: </label>
        <input type="password" class="form-control" id="pasw" value={ password} 
          onChange={ e => onCheck("password", e.target.value) } />
  </div>
      
      <button type="button" class="btn btn-outline-primary btn-lg mr-1" onClick={onLoginDentist}>I'm a dentist</button>
      <button type="button" class="btn btn-outline-primary btn-lg " onClick={onLoginPatient}>I'm a patient</button>
    
     
  </div>


</div>

</div>
</div>
</div>
);

export default LoginUser;
