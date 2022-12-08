import React from 'react';
import classes from './Form.module.css';

const Form = React.forwardRef((props,ref) => {

  return (
      <div className={`${classes.formContainer} ${classes.flex}`}>
          <form onSubmit={props.submit} className={`${classes.flex}`}>
              <label htmlFor='email'>Email</label>
              <input type="text" id='email' ref={props.email} className={classes.input} />
              <label htmlFor='password'>Password</label>
              <input type="password" id='password' ref={props.password} className={classes.input} />
              <button type='submit' >Submit</button>
          </form>
          <p><i>LOGIN CREDENTIALS :- ID - 'username' PASS - 'pass'</i></p>
          <p className={classes.note2}><i>TRY MAKING MISTAKE 😁</i></p>
      </div>
  )
})

export default Form;