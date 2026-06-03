
import "../styles/Home.css"

import PersonalPhoto from "../Images/SittingOnRocks.jpg"

function Home() {
    return (
        <div>
            <section id="home">
                <div id="sec1">
                    <h1 className="section-title">Home</h1>
                    <p>IT Support professional with experience in networking, system troubleshooting, virtualization, and security gained
                        through technical projects and cybersecurity training. Strong customer service background and
                        currently pursuing CompTIA Security+.</p>
                </div>
                <img src={PersonalPhoto} alt="Sitting on rocks" />
            </section>
            <section id="portfolio">
                <h1 className="section-title">Portfolio</h1>
                <div className="port-section" id="Portfolio1">
                    <h1>Building A Virtual Network</h1>
                    <p>Preformed network traffic analysis and security investigations using Wireshark,
                        and Nmap within a virtual SOC-style lab enviornment.
                    </p>

                </div>
                <div className="port-section" id="Portfolio2">
                    <h1>Production & DMZ Penetration Test</h1>
                    <p>Conducted a penetration test on production and web servers by identifying
                        exploiting, and documenting vulnerabilities within a virtual network
                        environment.
                    </p>
                </div>
                <div className="port-section" id="Portfolio3">
                    <h1>Uncovering Suspicious Files from a Locked OS</h1>
                    <p>Penetrated a Windows computer, using Kali Linux. Uncovered
                        and documented  three suspicious files, Hoot.txt, Hashbrowns.txt, and Hide.txt.
                    </p>
                </div>
            </section>

        </div>


    )
}

export default Home