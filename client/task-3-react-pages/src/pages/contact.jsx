
function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Get in touch with us if you have any questions.</p>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows="5"
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
