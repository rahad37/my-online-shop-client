import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import {useDispatch} from 'react-redux';
import { login } from '../redux/apiCalls';
import { useSelector } from 'react-redux';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(138, 130, 130, 0.7), rgba(138, 130, 130, 0.7)), url('https://static01.nyt.com/images/2018/12/13/smarter-living/how-to-dress-up-images-slide-A2WG/how-to-dress-up-images-slide-A2WG-superJumbo.jpg') center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;
const Wrapper = styled.div`
    width: 30%;
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
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: green;
        cursor: not-allowed;
    }
`;

const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Error = styled.span`
    color: red;
`

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector(state => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username, password});
    }
    return (
        <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder='UserName' onChange={(e) => setUsername(e.target.value)}/>
                <Input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                <Error>Something Went Wrong...</Error>
                {error && <Link>DO NOT YOU REMEMBER THE PASSWORD</Link>}
                <Link>CREATE A NEW ACCOUNT</Link>

            </Form>
        </Wrapper>
    </Container>
    );
};

export default Login;