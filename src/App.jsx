import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Title from './components/Title'
import BuscaCep from './components/BuscaCep'
import InfoCep from './components/InfoCep'
import './App.css'

function App() {
  const [info, setInfo] = useState('');

  const handleInfoChange = (newInfo) => {
    setInfo(newInfo);
  };

  return (
    <div className='flex flex-col gap-3 items-center'>
      <Title
       className="mt-10">
        Consulta de CEP
       </Title>
      <BuscaCep
       onInfoChange={handleInfoChange}/>
      <InfoCep
       info={info}/>
      <footer
       className='fixed bottom-0 p-1 bg-color-1 text-white w-full text-center'>
        <p>&copy; Created by João Vitor Bastos.</p>
      </footer>
    </div>
  )
}

export default App;