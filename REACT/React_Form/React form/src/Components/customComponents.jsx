import React from 'react';
import PropTypes from "prop-types";

export const CustomForm = ({ fields, onSubmit, buttonText }) => {
  const [formData, setFormData] = React.useState(() => {
    return fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {});
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      {fields.map((el, i) => (
        <div key={i}>
          <label htmlFor={el.name}>{el.label}</label>
          <br /><br />

          <input
            type={el.type}
            id={el.name}
            name={el.name}
            placeholder={el.placeholder}
            value={formData[el.name]}
            required={el.required}
            onChange={handleChange}
          />
          <br /><br />
        </div>
      ))}

      <button type="submit">{buttonText}</button>
    </form>
  );
};

CustomForm.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      required: PropTypes.bool,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};
