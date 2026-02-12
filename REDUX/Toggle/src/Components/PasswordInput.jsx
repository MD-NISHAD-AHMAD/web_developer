// PasswordInput.js
import React from "react";
import useToggle from "../Hooks/useToggles";

function PasswordInput() {
  const [showPassword, togglePassword] = useToggle(false);

  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
      />

      <button onClick={togglePassword}>
        {showPassword ? "Hide" : "Show"} Password
      </button>
    </div>
  );
}

export default PasswordInput;
