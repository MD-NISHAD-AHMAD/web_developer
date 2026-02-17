import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { PinItem } from "./PinItem";

export const InputBox = ({ setMainVal, perBox, length, style }) => {
  const [values, setValues] = useState(new Array(length).fill(""));
  const elements = useRef(new Array(length).fill(null));

  const handleChange = (v, i) => {
    const vals = [...values];
    vals[i] = v;
    setValues(vals);

    if (i < vals.length - 1) {
      elements.current[i + 1]?.focus();
    }

    setMainVal(vals.join(""));
  };

  const handleBackSpace = (i) => {
    const vals = [...values];
    vals[i] = "";
    setValues(vals);

    if (i === 0) return;

    elements.current[i - 1]?.focus();
    setMainVal(vals.join(""));
  };

  return (
    <>
      {values.map((item, index) => (
        <PinItem
          key={index}
          ref={(v) => (elements.current[index] = v)}
          style={style}
          max={perBox}
          handleChange={(dataVal) => handleChange(dataVal, index)}
          handleBackSpace={() => handleBackSpace(index)}
        />
      ))}
    </>
  );
};

InputBox.propTypes = {
  label: PropTypes.string,
  length: PropTypes.number.isRequired,
  perBox: PropTypes.number.isRequired,
  setMainVal: PropTypes.func,
  style: PropTypes.object,
};

InputBox.defaultProps = {
  label: "hello",
  length: 3,
  perBox: 1,
};
