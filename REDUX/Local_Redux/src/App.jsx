import { useState } from 'react';
import './App.css';
import { Todo } from './Pages/Todo';
import { Login } from './Components/Login';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin ? <Todo /> : <Login setIsLogin={setIsLogin} />}
    </>
  );
}

export default App;
