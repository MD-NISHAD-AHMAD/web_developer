import PropTypes from 'prop-types';
import { useState } from 'react';

export const Form = ({ formData, btnValue, funcValue }) => {
  const initialState = formData.reduce((acc, curr) => {
    acc[curr.name] = '';
    return acc;
  }, {});

  const [formValue, setFormValue] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    funcValue(formValue);
  };

  return (
    <>
      <h1>Form</h1>

      <form onSubmit={(e)=>handleSubmit(e)}>
        {formData.map((el) => (
          <div key={el.id}>
            <label htmlFor={el.id}>{el.label}</label>
            <br />
            <input
              id={el.id}
              name={el.name}
              type={el.type}
              placeholder={el.placeholder}
              required={el.isRequired}
              autoComplete="off"
              value={formValue[el.name]}
              onChange={(e)=>handleChange(e)}
            />
            <br />
            <br />
          </div>
        ))}

        <button type="submit">{btnValue}</button>
      </form>
    </>
  );
};

Form.propTypes = {
  formData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      isRequire: PropTypes.bool.isRequired,
      placeholder: PropTypes.string.isRequired,
    })
  ).isRequired,
  btnValue: PropTypes.string.isRequired,
  funcValue: PropTypes.func.isRequired,
};
