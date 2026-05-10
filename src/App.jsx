import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ComponentTest from './ComponentTest'
import ReusableComponent from './ReusableComponent'

function App() {
  const [count, setcount] = useState(0)
  const [texto, setTexto] = useState("")

  return (
    <>
    <h1 className='hero'> hola mundo </h1>
    <button
    onClick={() => setcount(count => count + 1)}
    className='counter'
    >
      Incrementar contador
    </button>
    <button
    onClick={() => setcount(count => count - 1)}
    className='counter'
    >
      Decrementar contador
    </button>
    <button
    onClick={() => setcount(0)}
    className='counter'
    >
      Resetear contador
    </button>
    <h2>El valor del contador es: {count} </h2>

    <ComponentTest name="Juanfer" count={count} />
    
    <input
      type="text"
      placeholder="Escribe un título..."
      value={texto}
      onChange={(e) => setTexto(e.target.value)}
    />

    <ReusableComponent title={texto || "Componente 1"} description="Primera instancia" />
    <ReusableComponent title="Componente 2" description="Segunda instancia" />
    <ReusableComponent title="Componente 3" description="Tercera instancia" />
    </>
  )
}    

export default App
