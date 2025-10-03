import "./Notification.css"

export default function Notification({image1, name, description, post, time, onClickDescription, handleClick, isClicked }) {
    return (
        <div>
           
                    <section className="notifications-container">
                      <div className="notification" style={{backgroundColor: isClicked ? "white" : ""}}>
                        <img src={image1} alt="image" className="not-image"/>
                        <div className="description" onClick={() => {onClickDescription(); handleClick() }}>
                            <div className="not-description"><span className="name">{name}</span><span className="span-description">{description}</span> <span className="not-post">{post}</span> <div className="red-circle"></div>
                            </div>
                            <span className="not-time">{time}</span>
                        </div>
                        
                      </div>
                    </section>
                 
        </div>
    )
}