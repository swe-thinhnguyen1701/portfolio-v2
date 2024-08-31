function Contact() {
    return (
        <section className="section contact">
            <h2>Get In Touch</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" autoComplete="on" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" autoComplete="on" />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" autoComplete="on" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows={10}></textarea>
                </div>
                <button className="btn send-btn">Send</button>
            </form>
        </section>
    )
}

export default Contact;