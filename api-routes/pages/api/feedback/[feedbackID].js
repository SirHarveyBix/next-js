import { builFeedbackPath, extractFeedback } from '../../../helpers/api-utils';

function handler(request, response) {
  const filePath = builFeedbackPath();
  const data = extractFeedback(filePath);
  const feedbackID = request.query.feedbackID;

  const selectedFeedback = data.find((feedback) => feedback.id === feedbackID);

  response.status(200).json({ feedback: selectedFeedback });
}

export default handler;
