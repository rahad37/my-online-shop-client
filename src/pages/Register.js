import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(138, 130, 130, 0.7), rgba(138, 130, 130, 0.7)), url('https://d.newsweek.com/en/full/1571795/fea-okmillennials-banner.jpg?w=1600&h=1200&q=88&f=e49ecb2a1b65c318d815e3145cb26bdf') center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})};
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder='First Name'/>
                    <Input placeholder='Last Name'/>
                    <Input placeholder='UserName'/>
                    <Input placeholder='Email'/>
                    <Input placeholder='Password'/>
                    <Input placeholder='Confirm Password'/>
                    <Agreement>
                        By creating an account, i consent to the processing of my personal data in accordance with the <b>PRIMARY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;