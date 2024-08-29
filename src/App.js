import React from 'react';
import './App.css';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

function App() {
  
  // Rive Component For React
  const { rive, RiveComponent } = useRive({
    src: '',  // Name of the File,
    stateMachines: "", // Name of the State Machine
    autoplay: true,
  });
  
  // Input from state machine variable asignation
  const _progress = useStateMachineInput(rive, "STATE MACHINE", "INPUT NAME", 0 /* DEFAULT */);

  // Mock a progress bar fill process
  React.useEffect(() => {
   if(_progress) {
    const i = setInterval(() => {
      if(_progress.value === 100) {
        clearInterval(i);
      } else {
        _progress.value = _progress.value +1;
      }
    },10)
   }
  }, [_progress]);
  
  return (
    <div className="App">
        <RiveComponent />
    </div>
  );
}

export default App;
