/* eslint-disable react/no-unescaped-entities */
import myAvatar from "../images/my-avatar.jpeg";

function About () {
    return (
        <section className="about-me section">
            <div className="about-me-heading">
                <img src={myAvatar} alt="my avatar" className="img"/>
            </div>
            <div className="about-me-content">
                <p className="first-p">Hi, my name is Thinh Nguyen, and I also go by Charles. I am a passionate and dedicated full stack developer with a strong foundation in applied mathematics, having earned my bachelor's degree from San Jose State University. Currently, I am furthering my expertise by taking a full-stack developer bootcamp at UC Berkeley.
                </p>
                <p>
                    I am proficient in a variety of programming languages including Java, JavaScript, Python, Lua, HTML, and CSS. In terms of databases, I have experience with PostgreSQL, MongoDB, and AWS DynamoDB. Additionally, I am well-versed in Node.js, Express, React, and several AWS technologies such as AWS Lambda, AWS API Gateway, and AWS S3 Bucket.
                </p>
                <p>
                    Although I am relatively new to the professional field, I have completed several projects during my time at the UC Berkeley bootcamp, as well as personal projects that have allowed me to hone my skills and develop a deeper understanding of full-stack development.
                </p>
                <p>
                    Outside of my professional interests, I enjoy swimming and playing basketball. These activities help me maintain a balanced and healthy lifestyle, and they also provide me with opportunities to connect with others and have fun.<br />
                </p>
                <p>I am enthusiastic about the future and look forward to contributing to innovative projects and working with talented teams to create impactful solutions.</p>
            </div>
        </section>
    );
}

export default About;