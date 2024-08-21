import charlesLogo from "../assets/Charles-logo.webp"

/* eslint-disable react/no-unescaped-entities */
function Home() {
    return (
        <section className="greeting">
            <span className="greeting-name">Hi, I'm <span className="green-color">Charles Nguyen</span></span>
            <span className="greeting-job-position">Creative Full-Stack Developer</span>
            <p>I design and develop innovative digital solution</p>
            <span className="logo">
                <img src={charlesLogo} alt="" className="logo-img" />
                <span className="logo-text">Charles Nguyen</span>
            </span>
        </section>
    )
}

export default Home;