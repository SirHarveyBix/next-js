import { useState } from 'react';
import classes from '../../styles/ContactForm.module.css';

function ContactForm() {
  const [entertedData, setEnteredData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const sendMessageHandler = (event) => {
    event.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ ...entertedData }),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  return (
    <section className={classes.contact}>
      <h1>Want to reach me ?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={entertedData.email}
              onChange={(event) => setEnteredData({ ...entertedData, email: event.target.value })}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={entertedData.name}
              onChange={(event) => setEnteredData({ ...entertedData, name: event.target.value })}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="5"
              requiredvalue={entertedData.message}
              onChange={(event) => setEnteredData({ ...entertedData, message: event.target.value })}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Send Message</button>
          </div>
        </div>
      </form>
    </section>
  );
}
export default ContactForm;
