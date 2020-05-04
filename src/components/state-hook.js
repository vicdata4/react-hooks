import React, { useState } from 'react';
import StateHookChild from './state-hook-child.js';

function StateHook() {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <StateHookChild count={count} />
    </div>
  );
}


export default StateHook;