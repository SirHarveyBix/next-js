// to get started : http://localhost:3000/api/feedback
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';

async function handler(request, response) {
  if (request.method === 'POST') {
    // stored in ../../data/feedback.json :
    // create Path
    const filePath = path.join(process.cwd(), 'data', 'feedback.json');
    // verify if file exists
    const isFileExists = fs.existsSync(filePath);
    // create file if dosen't exists
    if (!isFileExists) {
      fs.appendFile(filePath, '[]', (err) => {
        if (err) throw err;
      });
    }
    //read feedback.json
    const fileData = fs.readFileSync(filePath);
    // parse full file
    const data = JSON.parse(fileData);

    const email = request.body.email;
    const feedbackText = request.body.text;
    const newFeedback = {
      id: uuidv4(),
      email: email,
      text: feedbackText,
    };

    // push newFeedback into it
    await data.push(newFeedback);
    // write down in the file
    fs.writeFileSync(filePath, JSON.stringify(data));
    // send response : that worked, then shows what data has been wrriten

    response.status(201).json({ message: 'Succed !', feedback: newFeedback });
  } else response.status(200).json({ message: 'Hello Word' });
}

export default handler;
