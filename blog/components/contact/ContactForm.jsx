import { useState, useEffect } from 'react';
import classes from '../../styles/ContactForm.module.css';
import Notification from '../ui/Notification';

const sendContactData = async (contactDetails) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
};

function ContactForm() {
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();
  const [entertedData, setEnteredData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestError(null);
        setRequestStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendMessageHandler = async (event) => {
    event.preventDefault();
    setRequestStatus('pending');

    try {
      await sendContactData({ ...entertedData });
      setRequestStatus('success');
      setEnteredData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  };

  let notification = null;
  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way',
    };
  }
  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Message sent.',
      message: 'Message sent successfully',
    };
  }
  if (requestError) {
    notification = {
      status: 'error',
      title: 'Error !',
      message: requestError,
    };
  }

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
              required
              value={entertedData.message}
              onChange={(event) => setEnteredData({ ...entertedData, message: event.target.value })}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Send Message</button>
          </div>
        </div>
        {notification && <Notification {...notification} />}
      </form>
    </section>
  );
}
export default ContactForm;
