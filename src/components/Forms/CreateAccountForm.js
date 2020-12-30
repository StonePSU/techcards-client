import React from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../store/actions/auth';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { PrimaryButton } from "../Buttons/Buttons";

const CreateAccountForm = ({ history }) => {
    const dispatch = useDispatch();
    const submit = (data) => {
        const p = dispatch(registerUser('/api/auth/signup', data));
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
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" ref={register({
                required: "Please enter your first name"
            })} />
            {errors.firstName && <div className='error-msg'>{errors.firstName.message}</div>}

            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" ref={register({
                required: "Please enter your last name"
            })} />
            {errors.lastName && <div className='error-msg'>{errors.lastName.message}</div>}

            <label htmlFor="emailAddress">Email Address</label>
            <input type="text" name='emailAddress' ref={register({
                required: "Please enter your email address",
                pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: "Please enter a valid email"
                }
            })} />
            {errors.emailAddress && <div className='error-msg'>{errors.emailAddress.message}</div>}

            <label htmlFor="phoneNumber">Phone Number</label>
            <input name="phoneNumber" type="phone" />

            <label htmlFor="password">Password</label>
            <input name='password' type="password" ref={register({ required: "Please enter a password" })} />
            {errors.password && <div className='error-msg'>{errors.password.message}</div>}

            {/* <button type="submit" onClick={handleSubmit}>Sign in</button> */}
            <PrimaryButton type="submit" buttonText="Create My Account" />
            <div>Already have an account? <Link to="/login">Sign in</Link>.</div>
        </form>
    )
}

export default CreateAccountForm;
