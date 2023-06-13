import React  from 'react'



const SignIn = () => {
  return (
    <div className='form-container'>
    <h1 className='form-title'>Sign in</h1>
        <form className='form'>
        <div className='form-group'>
        <label htmlFor='title' className='form-label'>Email</label>
       <input
              type='email'
              id='title'
              className='form-input'
              value= ''
              required
        />
    </div>
    <div className='form-group'>
    <label htmlFor='location' className='form-label'>
   password
    </label>
    <input
    type='password'
    id='pass'
    className='form-input'
    value=''
    />
    </div>
    <button type='submit' className='form-btn'>
    Sign in
    </button>
    </form>
    
    </div>
    );
    };
    

export default SignIn