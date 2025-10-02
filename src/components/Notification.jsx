import "./Notification.css"

export default function Notification({image1, name, description, post, time}) {
    return (
        <div>
           
                    <section className="notifications-container">
                      <div className="notification">
                        <img src={image1} alt="image" className="not-image"/>
                        <div className="description">
                            <p><span className="name">{name}</span><span className="description">{description}</span> <span>{post}</span> </p>
                            
                        </div>
                        <br/><span>{time}</span>
                      </div>
                    </section>
                 
        </div>
    )
}