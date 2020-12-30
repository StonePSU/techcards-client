import React from 'react';

import Container from "../Container/Container";
import CreateAccountForm from "../Forms/CreateAccountForm";

const SignupPage = () => {
    return (
        <main>
            <section>
                <Container width={400} >
                    <h3>Create an Account</h3>
                    <CreateAccountForm />
                </Container>
            </section>
        </main>
    )
}

export default SignupPage;