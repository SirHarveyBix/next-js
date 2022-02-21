import { MongoClient } from 'mongodb';
import 'dotenv/config';

export default async function handler(request, response) {
  if (request.method === 'POST') {
    const { email, name, message } = request.body;

    if (
      !email ||
      !name ||
      !message ||
      !email.includes('@') ||
      name.trim() === '' ||
      message.trim() === ''
    ) {
      response.status(422).json({ message: 'Invalid input' });
      return;
    }

    const newMessage = { email, name, message };

    let client = null;
    try {
      client = await MongoClient.connect(process.env.DB);
    } catch (error) {
      response.status(500).json({ message: 'could not connect to mongo DB !' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      response.status(500).json({ message: 'Storing message Faild !' });
      return;
    }

    client.close();
    response.status(201).json({ message: 'Successfully Sent !', message: newMessage });
  }
}
