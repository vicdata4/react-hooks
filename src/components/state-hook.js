import React, { useState } from 'react';
import StateHookChild from './state-hook-child.js';

function StateHook() {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0);

  function onChildSubmit(e) {
    console.log(`My child sent me: ${e}`);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <StateHookChild count={count} onChildSubmit={onChildSubmit} />
    </div>
  );
}


export default StateHook;