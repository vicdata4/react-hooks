import React, { useState } from 'react';
import StateHookChild from './state-hook-child.js';

function StateHook() {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(Date.now());

  function onChildSubmit(e) {
    console.log(`My child sent me: ${e}`);
  }

  function getCurrentTime() {
    return `${new Date(currentTime)}`;
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCurrentTime(Date.now())}>
        Update current time
      </button>
      <p>Current time: {getCurrentTime()}</p>
      <StateHookChild count={count} onChildSubmit={onChildSubmit} />
    </div>
  );
}


export default StateHook;