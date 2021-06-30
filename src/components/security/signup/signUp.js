import React, {useState} from 'react';
import './signUp.css'

function SignUp(){

    const [credentials, setCredentials] = useState({
        email: 'example@gmail.com',
        password: '****',
        confirmPassword: '****'
    });

    return(
        <div className='sign-up-container'>
            <h2>Sign up to Mazaryn</h2>
            <form>
                <div className='input'>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" value={credentials.email}/>
                </div>
                <div className='input'>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" value={credentials.password} />
                </div>
                <div className='input'>
                    <label for="confirm-password">Confirm password</label>
                    <input type="password" name="confirm-password" id="confirm-password" value={credentials.confirmPassword} />
                </div>
            </form>
            <button class="sign-up-btn">Sign up</button>
            <div class="sign-in">
                <a href="#">Sign in</a>
            </div>
        </div>
    );
}

export default SignUp;