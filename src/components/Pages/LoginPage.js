import React from 'react';

import Container from "../Container/Container";
import LoginForm from "../Forms/LoginForm";

const SignupPage = (props) => {
    return (
        <main>
            <section>
                <Container width={400} >
                    <h3>Log in</h3>
                    <LoginForm {...props} />
                </Container>
            </section>
        </main>
    )
}

export default SignupPage;