import React, { Children, createContext, useState } from 'react'

export const contextCreated = createContext(null);

export const ContextComponents = ({Children}) => {
    const [data, setData] = useState([]);
    const [islogin, setIsLogin] = useState(false);

    return (
        <contextCreated.Provider value={{data, setData, islogin, setIsLogin}}>
            {Children}
        </contextCreated.Provider>
    );
};