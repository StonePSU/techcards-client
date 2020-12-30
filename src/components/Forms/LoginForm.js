import React from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Container from "../Container/Container";
import { PrimaryButton } from "../Buttons/Buttons";

const LoginForm = ({ history }) => {
    const dispatch = useDispatch();
    const submit = (data) => {
        const p = dispatch(registerUser('/api/auth/login', data));
        p.then((res) => {
            history.push("/dashboard")
        })
            .catch(err => {
                console.log(err);
            })
    }

    const { register, handleSubmit, watch, errors } = useForm({ mode: 'onBlur' });

    return (

        <form className="column-form" onSubmit={handleSubmit(submit)}>

            <label htmlFor="emailAddress">Email Address</label>
            <input name='emailAddress' ref={register({
                required: "Please enter your email address",
                pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: "Please enter a valid email"
                }
            })} />
            {errors.emailAddress && <div className='error-msg'>{errors.emailAddress.message}</div>}

            <label htmlFor="password">Password</label>
            <input name='password' type="password" ref={register({ required: "Please enter a password" })} />
            {errors.password && <div className='error-msg'>{errors.password.message}</div>}

            {/* <button type="submit" onClick={handleSubmit}>Sign in</button> */}
            <PrimaryButton type="submit" buttonText="Sign in" />
            <div>Don't have an account yet? <Link to="/signup">Create one</Link>.</div>
        </form>
    )
}

export default LoginForm;
