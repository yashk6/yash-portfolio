function Contact() {
    return (
      <div className="page contact-page">
        <h1>Contact Me</h1>
        <p className="contact-intro">
          Feel free to reach out to me by filling the form below. I'll get back to you as soon as possible!
        </p>
        <form
          action="https://formspree.io/f/xwpbrzye"
          method="POST"
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  }
  
  export default Contact;