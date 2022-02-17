import { v4 as uuidv4 } from 'uuid';

function handler(request, response) {
  const eventId = request.query.eventId;

  if (request.method === 'POST') {
    const { email, name, text } = request.body;
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      response.status(422).json({ message: 'invalid input.' });
      return;
    }

    const newComment = {
      id: uuidv4(),
      email,
      name,
      text,
    };

    response.status(201).json({ message: 'comment added.', comment: newComment });
  }
  if (request.method === 'GET') {
    const dummy = [
      {
        id: uuidv4(),
        name: 'didier',
        text: 'wuh  ?',
        email: 'test@ok.lol',
      },
      {
        id: uuidv4(),
        name: 'didi',
        text: 'les pâtes cherrie !',
        email: 'test@ok.lol',
      },
    ];

    response.status(200).json({ comments: dummy });
  }
}

export default handler;
