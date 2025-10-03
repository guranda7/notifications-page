import { useState } from "react";
import "./Header.css"
import Notification from "./Notification";
import data from "../data.json";

export default function Header() {
    const [notAmount, setNotAmount] = useState(data.length); 
    const [isClicked, setIsClicked] = useState(false);
    function decreaseCount() {
        setNotAmount((prev) => prev - 1)
    }

    function handleClick() {
        setIsClicked(true)
    }
    
    return (
        <div>
            <div className="main-container">
                    <section className="header">
                      <div className="header-title">
                        <span>Notifications</span>
                        {notAmount > 0 ?  <div className="not-counter"><span>{notAmount}</span></div> : ""}
                       
                      </div>
                      <p className="mark-title">Mark all as read</p>
                    </section>
                    {
                        data.map((item) => (
                            <Notification 
                            image1={item.image}
                             name={item.name} 
                             description={item.description} 
                             post={item.post} 
                             key={item.id} 
                             time={item.time}
                             onClickDescription={decreaseCount}
                             handleClick={handleClick}
                             isClicked={isClicked}/>
                        ))
                    }   
            </div>
        </div>
    )
}