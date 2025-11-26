import React from 'react';

export const Card = ({
  name = 'Not Provided',
  age = 'not given',
  email = 'not specify',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        border: '1px solid red',
        height: '200px',
        maxWidth: '300px',
        padding: '20px',
      }}
    >
      <h2>Name: {name}</h2>
      <h4>Email: {email}</h4>
      <h5>Age: {age}</h5>
    </div>
  );
};
