import { useRef } from 'react';

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    const requestBody = { email: enteredEmail, text: enteredFeedback };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Email address : </label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Feedback : </label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef} />
        </div>
        <button>Send your Feedback !</button>
      </form>
    </div>
  );
}

export default HomePage;
