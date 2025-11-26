import './App.css';
import { Card } from './components/card.jsx';

export const App = () => {
  return (
    <>
      <h1>hello</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Card name="NISHAD" age={25} email="nishadahmadm@gmail.com" />
        <Card name="ABDUL" email="abdulamama@123gmail.com" />
        <Card />
      </div>
    </>
  );
};
