// to get started : http://localhost:3000/api/feedback
import fs from 'fs';
import path from 'path';

function handler(request, response, error) {
  if (request.method === 'POST') {
    const email = request.body.email;
    const feedbackText = request.body.text;
    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    // stores in ../data/feedback.json :
    // create Path
    const filePath = path.join(process.cwd(), 'data', 'feedback.json');
    //read feedback.json
    const fileData = fs.readFileSync(filePath);
    // parse full file
    const data = JSON.parse(fileData);

    // push newFeedback into it
    data.push(newFeedback);
    // write down in the file
    fs.writeFileSync(filePath, JSON.stringify(data));
    // sned resonse : that worked, then shows what data has been wrriten

    response.status(201).json({ message: 'Succed !', feedback: newFeedback });
  } else response.status(200).json({ message: 'Hello Word' });
}

export default handler;
