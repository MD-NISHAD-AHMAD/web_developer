import React from 'react';

// import { useDispatch, useSelector} from "react-redux";

import axios from "axios";

// import  * as actFunc from '../Redux/Action';

export const TodosInput = ({getApi}) => {
    const inputValue = React.useRef();

    // const dispatch = useDispatch();

    const addTodos = () => {
        if (inputValue && inputValue.current.value.trim() !== '') {
            let data = {
                title: inputValue.current.value,
                status: false,
            };

            return axios 
            .post('http://localhost:8080/todo', data)
            .then((res) => res)
            .catch((err) => console.log(err));
        }
    };

    const handleAdd = () => {
        addTodos().then(() => getApi())
    }

    

    return (
        <>
        <input type="text" ref={inputValue} />
        <button onClick={handleAdd}>ADD</button>
        </>
    )
};