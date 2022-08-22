import React from 'react';
import './App.css';
import useCounter from './hooks/useCounter';


const App = (props) => {
  const contadorApp = useCounter();
  console.log(contadorApp)


  return (
    <div className="App">
        <h1>Contador</h1>
          <button onClick={contadorApp.resta}> - </button>
          <h3>{contadorApp.contador}</h3>
          <button onClick={contadorApp.suma}> + </button>
          <button onClick={contadorApp.reset}>Iniciar de nuevo</button>
    </div>
  );
}

export default App;
