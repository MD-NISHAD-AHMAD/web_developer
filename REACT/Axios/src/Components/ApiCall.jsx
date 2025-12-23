import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import { contextCreated } from '../Context/CreateComponentsContext';

const fetchData = (url) => {
  return axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => [null, err]);
};

export const ApiCall = () => {
  const { data, setData } = useContext(contextCreated);

  const api = 'https://fakestoreapi.com/products';

  useEffect(() => {
    fetchData(api)
      .then((res) => {
        console.log("API response:", res);   
        setData(res);
      })
      .catch((err) => console.warn(err));
  }, []);

  console.log("Context data:", data); 

  return (
    <>
      <h1>Api Call</h1>
    </>
  );
};
