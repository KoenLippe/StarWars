import React, { useState } from 'react';
import Tweet from './Tweet';

function Home() {
  const [isRed, setIsRed] = useState(false);
  const [count, setCount] = useState(0);

  const [users, setUsers] = useState([
    { user: 'Ed', message: 'test' },
    { user: 'asdf', message: 'teassdfst' },
    { user: 'aaa', message: 'dsdafsdfasdf' }
  ]);

  const increment = () => {
    setCount(count + 1);
    setIsRed(true);
  };

  const changeColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div className="app">
      <Tweet name="Koen" message="Random tweet message" likes="2" />
      <Tweet name="asdf" message="Randssadge" likes="2" />
      <Tweet name="dd" message="Randossss message" likes="2" />
      <Tweet name="asdfasdfasdf" message="ddddtweet message" likes="2" />
      <Tweet name="ddd" message="Rdtwedge" likes="2" />

      <div className={isRed ? 'red' : ''}>
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
      </div>
      <div>
        <button onClick={changeColor}>Change color</button>
      </div>

      {users.map(user => (
        <Tweet name={user.user} message={user.message} />
      ))}
    </div>
  );
}

export default Home;
