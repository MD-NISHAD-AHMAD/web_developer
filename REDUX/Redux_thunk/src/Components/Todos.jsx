import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { TodosInput } from './TodosInput';
import * as actFunc from '../Redux/Action';

export const Todos = () => {
  const data = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const getApi = () => {
    axios.get('http://localhost:8080/todo')
      .then((res) => dispatch(actFunc.getTodosSuccess(res.data)))
      .catch((err) => console.error(err));
  };

  React.useEffect(() => {
    getApi();
  }, []);

  console.log('data:', data);

  return (
    <>
      <h1>Todos</h1>

      <TodosInput getApi={getApi} />

      {data.map((el) => (
        <p key={el.id}>
          {el.title} - {el.status ? 'true' : 'false'}
        </p>
      ))}
    </>
  );
};
