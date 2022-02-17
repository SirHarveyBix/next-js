import { connectDatabase, getAllDocuments, insertDocument } from '../../../helpers/db-utils';

async function handler(request, response) {
  const eventId = request.query.eventId;
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    response.status(500).json({ message: 'connecting to database failed' });
    return;
  }

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
      client.close();
      return;
    }

    const newComment = {
      eventId,
      email,
      name,
      text,
    };

    let result;

    try {
      result = await insertDocument(client, 'comments', newComment);
      newComment._id = result.insertedId;
      response.status(201).json({ message: 'comment added.', comment: newComment });
    } catch (error) {
      response.status(500).json({ message: 'inserting data failed' });
      return;
    }
  }
  if (request.method === 'GET') {
    let documents;

    try {
      documents = await getAllDocuments(client, 'comments', { _id: -1 }, { eventId: eventId });

      response.status(200).json({ comments: documents });
    } catch (error) {
      response.status(500).json({ message: 'Getting comments failed' });
      return;
    }
  }
  client.close();
}

export default handler;
