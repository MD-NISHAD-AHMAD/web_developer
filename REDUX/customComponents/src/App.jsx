import './App.css';

import { HomeButton } from './Component/HomeButton';
import { Sign_in_Button } from './Component/Sign_in_Button';
import { Button } from './Component/Button';

function App() {
  return (
    <>
      <h1>hello</h1>

      <HomeButton value={'home button'} />
      <br /><br />

      <Sign_in_Button value={'Sign In'} />
      <br /><br />

      <Button 
        value={{
          name: 'signUp',
          style: {
            padding: '.25rem 1rem',
            borderRadius: '.4rem',
            border: '2px solid red',
            background: 'transparent',
          },
        }}
      />
    </>
  );
}

export default App;
