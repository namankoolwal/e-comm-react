import React from 'react'
import './LoginUser.css';

const LoginUser = () => {
  return (
    <div id="form_wrapper">
    <div id="form_right">
        <h1>Login </h1>
        <br />
        <br/>
        <br />
        <div class="input_container">
            <i class="fas fa-envelope"></i>
            <input placeholder="Email" type="email" name="email" id="field_email" class="input_field" />
        </div>
        <br />
        <div class="input_container">
            <i class="fas fa-lock"></i>
            <input placeholder="Password" type="password" name="pass" id="field_pass" class="input_field" />
        </div>
        <br /><br/>
        <span>Forget <a href="#">Username/Password ?</a> </span>
        <br /><br />
        <input type="submit" value="LOGIN" id="input_submit" class="input_field" />
        <br/><span id='create_account'>
           Not a Member ? <a href="#">Signup</a>
        </span>
    </div>
</div>
  )
}

export default LoginUser