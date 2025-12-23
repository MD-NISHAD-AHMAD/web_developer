import { useContext, useEffect } from "react";

import {contextCreated} from '../Context/ContextComponents';
import axios from 'axios'

export const ApiCall = () => {
    const {data, setdata} = useContext(contextCreated);

    const api_calling = async () => {
        const API = 'https://fakestoreapi.com/products';

        let ans = await axios(API)
        let res = ans;

        setdata(res.data)

    };

    useEffect(() => {
        api_calling();
    }, []);


    return (
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)'}}>
            {data &&
            data.map((el) => {
                return (
                    <div key={el.id}>
                        <h4>{el.id}</h4>
                        <img src={el.image} alt="Img" />
                        <p>{el.title}</p>
                        <h3>{el.price}</h3>
                        <h3>{el.description}</h3>
                        <h3>{el.category}</h3>
                    </div>      
                )
            })
            }
        </div>
    )
}