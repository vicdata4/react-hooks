import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../App.js';

function StateHookChild(props) {
  const theme = useContext(ThemeContext);

  const showAlert = () => {
    alert(`My parent value is ${props.count}`);
  };

  function dispatchEvent(){
    props.onChildSubmit(`Hello parent, your current value is ${props.count}`);
  }

  useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    console.log(`The parent property has changed. New value: ${props.count}`);

    return () => {
        console.log(`Clean up function: Removed State hook component from UI`);
    };
  }, [props.count]);

  return (
    <div>
      <p>I'm State-hook child</p>
      <button onClick={() => showAlert()} style={{ background: theme.background, color: theme.foreground }}>Show parent value</button>
      <button onClick={() => dispatchEvent()}>Dispatch event</button>
    </div>
  );
}


export default StateHookChild;