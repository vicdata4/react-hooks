import React, { useEffect } from 'react';

function StateHookChild(props) {

  const showAlert = () => {
    alert(`My parent value is ${props.count}`);
  };

  function dispatchEvent(){
    props.onChildSubmit(`Hello parent, your current value is ${props.count}`);
  }

  useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    console.log(`The parent property has changed. New value: ${props.count}`);
  }, [props.count]);

  return (
    <div>
      <p>I'm State-hook child</p>
      <button onClick={() => showAlert()}>Show parent value</button>
      <button onClick={() => dispatchEvent()}>Dispatch event</button>
    </div>
  );
}


export default StateHookChild;