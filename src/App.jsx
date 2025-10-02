import { useState } from 'react'
import './App.css';

import data from "./data.json";
import Notification from './components/Notification';

function App() {
  data.map((item) => console.log(item))

  return (
    <>
    {
      data.map((item) => (
        <Notification image1={item.image} name={item.name} description={item.description} key={item.id}/>
      ))
    }
      
    </>
  )
}

export default App
