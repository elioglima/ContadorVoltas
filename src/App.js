import React, { useState, useEffect } from 'react'
import MostraVoltas from './components/mostraVoltas'
import MostraTempo from './components/mostraTempo'
import Button from './components/button'

function App() {

  const [numVoltas, setNumVoltas] = useState(1)
  const [tempo, setTempo] = useState(0)
  const [running, setRunning] = useState(0)

  useEffect(() => {
    let timer = null
    if (running) {
      timer = setInterval(() => {
        setTempo(old => old + 1)
      }, 1000);
    }
    return () => {
      if (timer)
        clearInterval(timer)
    }
  }, [running])

  const togleRunning = () => {
    setRunning(!running)
  }
  const increment = () => setNumVoltas(numVoltas + 1)
  const decrement = () => setNumVoltas(numVoltas - 1)
  const reset = () => {
    setNumVoltas(0)
    setTempo(0)
  }

  return (
    <div className='App'>
      <MostraVoltas voltas={numVoltas} />
      <Button text={'+'} onClick={increment} />
      <Button text={'-'} onClick={decrement} />
      {(numVoltas > 0) && <MostraTempo tempo={Math.round(tempo / numVoltas)} />}
      <Button text={'Iniciar'} onClick={togleRunning} />
      <Button text={'Reiniciar'} onClick={reset} />
    </div>
  );
}

export default App;
