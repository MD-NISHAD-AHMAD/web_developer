import React, { useRef } from "react";
import * as type from "../Reducer/Action";

export const TodoList = ({ value }) => {
  const { state, dispatch } = value;
  const editValue = useRef(null);

  const handleClickDelete = (id) => {
    dispatch({ type: type.DELETES_TODO_ITEMS, payload: id });
  };

  const handleClickEdit = (id) => {
    dispatch({ type: type.EDITS_TODO_ITEMS, payload: id });
  };

  const handleClickconfirm = (id) => {
    const editText = editValue.current.value.trim();

    dispatch({
      type: type.EDITS_TODO_ITEMS,
      payload: { updatedText: editText, id },
    });
  };

  const handleClickcancel = (id) => {
    dispatch({ type: type.EDITS_TODO_ITEMS, payload: id });
  };

  return (
    <>
      {state.items &&
        state.items.map((el) => (
          <ul
            key={el.id}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              listStyle: "none",
            }}
          >
            <input type="checkbox" />
            <li>{el.id}</li>

            {el.isEdits ? (
              <input ref={editValue} defaultValue={el.text} type="text" />
            ) : (
              <li>{el.text}</li>
            )}

           
            {el.isEdits ? (
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  style={{ background: "green" }}
                  onClick={() => handleClickconfirm(el.id)}
                >
                  confirm
                </button>

                <button
                  style={{ background: "red" }}
                  onClick={() => handleClickcancel(el.id)}
                >
                  cancel
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => handleClickEdit(el.id)}>
                  edit
                </button>

                <button
                  style={{ background: "red" }}
                  onClick={() => handleClickDelete(el.id)}
                >
                  delete
                </button>
              </div>
            )}
          </ul>
        ))}
    </>
  );
};
