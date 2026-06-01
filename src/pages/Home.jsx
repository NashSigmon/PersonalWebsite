
import "../styles/Home.css"

import PersonalPhoto from "../Images/SittingOnRocks.jpg"

function Home() {
    return (
        <section id="home">
            <div id="home1">
                <h1 className="section-title">Home</h1>
                <p>Hello, I'm a cybersecurity professional and full stack developer.</p>
            </div>
            <img src={PersonalPhoto} alt="Sitting on rocks" />
        </section>

    )
}

export default Home