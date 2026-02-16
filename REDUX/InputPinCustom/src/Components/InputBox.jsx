import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { PinItem } from "../Components/PinItem";

export const InputBox = ({ setMainVal, perBox, length, style }) => {

  const [values, setValues] = useState(new Array(length).fill(""));
  const elements = useRef(new Array(length).fill(""));

  const handlechange = (v, i) => {
    const vals = [...values];
    vals[i] = v;
    setValues(vals);

    elements.current[i + 1]?.focus();
    setMainVal(values.join(""));
  };

  return (
    <>
      {
        values.map((items, index) => (
          <PinItem
            ref={(v) => elements.current[index] = v}
            style={style}
            key={index}
            max={perBox}
            handleChange={(dataVal) => handlechange(dataVal, index)}
          />
        ))
      }
    </>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  perBox: PropTypes.number.isRequired
};

InputBox.defaultProps = {
  label: "hello",
  length: 3,
  perBox: 1
};
