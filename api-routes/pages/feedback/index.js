import { useState } from 'react';
import { builFeedbackPath, extractFeedback } from '../../helpers/api-utils';

function FeedbackPage(props) {
  const { feedbackItems } = props;
  const [feedbackData, setFeedbackData] = useState(null);

  const loadFeedbackHandler = (id) => {
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  };

  return (
    <>
      <ul>
        {feedbackItems.map((feedback) => (
          <li key={feedback.id}>
            {feedback.text}
            <div>
              <button onClick={loadFeedbackHandler.bind(null, feedback.id)}>Show details</button>
            </div>
          </li>
        ))}
        {feedbackData && <p>{feedbackData.email}</p>}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = builFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
