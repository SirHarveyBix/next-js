import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import { builFeedbackPath, extractFeedback } from '../../../helpers/api-utils';

async function handler(request, response) {
  if (request.method === 'POST') {
    const filePath = builFeedbackPath();
    const newFeedback = {
      id: uuidv4(),
      email: request.body.email,
      text: request.body.text,
    };

    // create file if dosen't exists
    const isFileExists = fs.existsSync(filePath);
    if (!isFileExists) {
      fs.appendFile(filePath, `[${JSON.stringify(newFeedback)}]`, (error) => {
        if (error) throw error;
      });
      response.status(201).json({ message: 'Succed !', feedback: newFeedback });
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
