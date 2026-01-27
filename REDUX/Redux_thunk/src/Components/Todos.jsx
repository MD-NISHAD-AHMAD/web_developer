import React from 'react';
import { shallowEqual,useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';

import { TodosInput } from './TodosInput';
import { getApi } from './Redux/action';

export const Todos = () => {
  const {todo, isLoadings, isErrors } = useSelector((state) => {
    return {

    todo:state.todos,
    isLoadings: state.isLoading,
    isErrors: state.isError,
 };
 }, shallowEqual );
 console.log('--> ~ isError:', isErrors);
 console.log('---> ~ isLoadings:', isLoadings);

  const dispatch = useDispatch();

 

  React.useEffect(() => {
    dispatch(getApi)
  }, []);

  // console.log('data:', data);

  return (
    <>
      <h1>Todos</h1>

      <TodosInput />

      {todo?.map((el) => (
        <p key={el.id}>
          {el.title} - {el.status ? 'true' : 'false'}
        </p>
      ))}
      {isLoadings && <h1>Loading......</h1>}
      {isErrors && <h1>something went wrong...</h1>}
    </>
  );
};
