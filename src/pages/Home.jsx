
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
                <h1 className="section-title" id="portfolio-title">Portfolio</h1>
                <div id="sec2">
                    <div className="port-section" id="Portfolio1">
                        <h1>Systems Implementation & Network Environment Setup</h1>
                        <p>Preformed network traffic analysis and security investigations using Wireshark,
                            and Nmap within a virtual SOC-style lab enviornment.
                        </p>
                        <ul>
                            <li>Configured and secured virtual machines, internal networks, web servers, and DNS systems within a simulated environment.</li>
                            <li>Supported system adminstration across Windows/Linux while applying foundational security controls to protect systems.</li>

                        </ul>

                    </div>
                    <div className="port-section" id="Portfolio2">
                        <h1>Vulnerability Assessment & Security Enhancement</h1>
                        <p>Conducted a penetration test on production and web servers by identifying
                            exploiting, and documenting vulnerabilities within a virtual network
                            environment.
                        </p>
                        <ul>
                            <li>Assessed vulnerabilities across production servers and network environments to identify security gaps. </li>
                            <li>Implemented remediation strategies and recommended improvements to strengthen overall security posture and align with best practices. </li>

                        </ul>
                    </div>
                    <div className="port-section" id="Portfolio3">
                        <h1>Threat Detection, Incident Response & CFT Analysis</h1>
                        <p>Penetrated a Windows computer, using Kali Linux. Uncovered
                            and documented  three suspicious files, Hoot.txt, Hashbrowns.txt, and Hide.txt.
                        </p>
                        <ul>
                            <li>Analyzed security data and investigated simulated threats to support incident detection, response, and mitigation efforts.</li>
                            <li>Participated in capture-the-flag (CTF) exercises to identify, exploit, and remediate vulnerabilities across systems. </li>
                            <li>Applied log analysis and penetration testing concepts to document findings and recommend mitigation strategies.</li>

                        </ul>
                    </div>


                </div>

            </section>

        </div>


    )
}

export default Home