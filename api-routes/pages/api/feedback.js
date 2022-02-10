// to get started : http://localhost:3000/api/feedback
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

export const builFeedbackPath = () => {
  return path.join(process.cwd(), 'data', 'feedback.json');
};

export const extractFeedback = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
};

async function handler(request, response) {
  if (request.method === 'POST') {
    const filePath = builFeedbackPath();

    const email = request.body.email;
    const feedbackText = request.body.text;
    const newFeedback = {
      id: uuidv4(),
      email: email,
      text: feedbackText,
    };

    // create file if dosen't exists
    const isFileExists = fs.existsSync(filePath);
    if (!isFileExists) {
      fs.appendFile(filePath, '[]', (error) => {
        if (error) throw error;
      });
    }

    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    response.status(201).json({ message: 'Succed !', feedback: newFeedback });
  } else {
    const filePath = builFeedbackPath();
    const data = extractFeedback(filePath);
    response.status(200).json({ feedback: data });
  }
}

export default handler;
