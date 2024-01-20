import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/ThemeContext'
import { useEffect } from 'react';
import Button from './Components/Button';
import Card from './Components/Card';

function App() {
  const [themeMode,setThemeMode] = useState('light');

  const darkMode = () => {
    setThemeMode('dark');
  }

  const lightMode = () => {
    setThemeMode('light')
  }

  //actual change in the theme
  useEffect(()=>{
    const page = document.querySelector('html');

    page.classList.remove('light','dark');
    page.classList.add(themeMode);
  },[themeMode])


  return (
    <ThemeProvider value={{themeMode,darkMode,lightMode}}>
      {/* <h2 className='font-bold text-2xl max-w-sm mx-auto text-center my-4'>My Github Profile</h2> */}

      <div className="flex flex-wrap min-h-screen items-center bg-pink-300 ">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Button to toggle the theme */}
            <Button />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
