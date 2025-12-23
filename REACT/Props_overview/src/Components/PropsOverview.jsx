import React from 'react';

export const PropsOverview = ({
    components = 'not defined',
    name = 'not specify',
    email = 'not provided',
    phone = 'not given',

}) => {

    return (
        <>
        <h1>Props overview no {components}</h1>
        <h3>name {name}</h3>
        <h4>email {email}</h4>
        <h5>phone {phone}</h5>
        </>
    );
};