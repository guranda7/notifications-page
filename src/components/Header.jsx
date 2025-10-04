import { useState } from "react";
import "./Header.css"
import Notification from "./Notification";
import data from "../data.json";

export default function Header() {
  

    const[notifications, setNotifications] = useState(
        data.map((item) => ({...item, isClicked: false}))
    )

    function markAsRead(id) {
        setNotifications(prev => 
            prev.map(n => n.id === id ? {...n, isClicked: true} : n)
        )
    }

    const notAmount = notifications.filter(notification => !notification.isClicked).length;
    

    function handleClick() {
        setIsClicked(true)
    }
    
    return (
        <div>
            <div className="main-container">
                    <section className="header">
                      <div className="header-title">
                        <span>Notifications</span>
                        {notAmount > 0 && ( <div className="not-counter"><span>{notAmount}</span></div>)}
                       
                      </div>
                      <p className="mark-title">Mark all as read</p>
                    </section>
                    {
                        notifications.map((item) => (
                            <Notification 
                            image1={item.image}
                             name={item.name} 
                             description={item.description} 
                             post={item.post} 
                             key={item.id} 
                             time={item.time}
                             onClickDescription={() => markAsRead(item.id)}
                             handleClick={handleClick}
                             isClicked={item.isClicked}/>
                        ))
                    }   
            </div>
        </div>
    )
}