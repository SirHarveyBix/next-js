import { builFeedbackPath, extractFeedback } from '../api/feedback';

function FeedbackPage(props) {
  console.log(props);
  const { feedbackItems } = props;
  return (
    <ul>
      {feedbackItems.map((feedback) => (
        <li key={feedback.id}>{feedback.text}</li>
      ))}
    </ul>
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
