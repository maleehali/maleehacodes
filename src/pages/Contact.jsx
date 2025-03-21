function Contact() {
    return (
      <section>
        <h2 className="text-xl font-bold">Contact Me</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    );
  }
  
  export default Contact;
  