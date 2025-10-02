import "./Header.css"
import Notification from "./Notification";
import data from "../data.json";


export default function Header() {
    return (
        <div>
            <div className="main-container">
                    <section className="header">
                      <div className="header-title">
                        <span>Notifications</span>
                        <div className="not-counter"><span>3</span></div>
                      </div>
                      <p className="mark-title">Mark all as read</p>
                    </section>
                    {
                        data.map((item) => (
                            <Notification image1={item.image} name={item.name} description={item.description} post={item.post} key={item.id} time={item.time}/>
                        ))
                    }   
            </div>
        </div>
    )
}