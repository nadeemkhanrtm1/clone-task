import React from 'react'

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <a href="mailto:info@mysite.com">info@mysite.com</a>
      <span>/</span>
      <a href="/">500 Terry Francois Street, San Francisco, CA 94158</a>
      <span>/</span>
      <a href="/" className="last-a">Tel: 123-456-7890
      </a>
      <form>
        <div>
          <input type="text" name="name" placeholder="Name*"/>
          <input type="email" name="email" placeholder="Email*"/>
        </div>
        <input type="text" name="subject" placeholder="Subject"/>
        <textarea name="message" rows="10" placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
