import { useContext, useState } from "react";
import { contextCreated } from "../Context/ContextComponents";

import {Form, Navigate} from 'react-router-dom'

export const Auth = () => {
    const { islogin, setlogin } = useContext(contextCreated);
    const [text, setText] = useState('');
    const [textPass, setTextPass] = useState('');

    const handleSubmit = (e) => {
        console.log('hello from submit func');
        e.preventDefault();
        if (
            text.length === 0 &&
            textPass.length === 0 &&
            text === '' &&
            textPass === ''

        ) {
            return;
        }
        console.log('hello from submit func end');
        setIslogin(!islogin);
    };

    if (islogin) {
        console.log('hello');

        return <Navigate to="/" />;
    }

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <div>
                <label htmlFo="useName">user name</label>
                <input 
                id="useName"
                type="text" 
                placeholder="enter your name..."
                onChange={(e) => setText(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">user pass</label>
                <input
                id="password" 
                type="password"
                placeholder="enter your password..."
                onChange={(e) => setTextPass(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </Form>
        </>
    );
};