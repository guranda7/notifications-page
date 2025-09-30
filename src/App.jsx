import { useState } from 'react'
import './App.css';
import image1 from "./assets/images/avatar-mark-webber.webp"

function App() {
  

  return (
    <>
      <div className="main-container">
        <section className="header">
          <div className="header-title">
            <span>Notifications</span>
            <div className="not-counter"><span>3</span></div>
          </div>
          <p className="mark-title">Mark all as read</p>
        </section>

        <section className="notifications-container">
          <div className="notification">
            <img src={image1} alt="image" />
            <p><span className="name">Mark Webber</span> <span className="description">reacted to your recent post</span> <span>My first tournament today!</span> </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
