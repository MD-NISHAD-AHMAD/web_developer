import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  password: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };

    case "SET_PASSWORD":
      return { ...state, password: action.payload };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Username:", state.username);
    console.log("Password:", state.password);

    if (
      state.username.trim() === "nishad" &&
      state.password.trim() === "9199"
    ) {
      localStorage.setItem("isLogin", "true");
      navigate("/todo");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={state.username}
            onChange={(e) =>
              dispatch({
                type: "SET_USERNAME",
                payload: e.target.value
              })
            }
          />
        </div>

        <br />

        <div>
          <input
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) =>
              dispatch({
                type: "SET_PASSWORD",
                payload: e.target.value
              })
            }
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
