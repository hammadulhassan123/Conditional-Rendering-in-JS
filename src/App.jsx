import { useState } from 'react';
import './App.css'
import Test from './assets/Components/Test'

function App() {
 const [isShown, setIsShown]=  useState(false);
 const toggle = () => setIsShown(isShown=>!isShown);
  return (
    <div className="App">
    <button onClick={toggle}>Toggle</button>
    {isShown && <Test/>}
    </div>
  )

}

export default App
