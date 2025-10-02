import { useState } from 'react'
import './App.css';
import image1 from "./assets/images/avatar-mark-webber.webp";
import data from "./data.json";
import Notification from './components/Notification';

function App() {
  data.map((item) => console.log(item))

  return (
    <>
      <Notification image1={image1}/>
    </>
  )
}

export default App
