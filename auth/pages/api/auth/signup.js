import { connectToDatabase } from '../../../lib/db-helper';
import { hashPassword } from '../../../lib/auth';

async function handler(request, response) {
  if (request.method !== 'POST') {
    return;
  }
  const data = request.body;
  const { email, password } = data;

  if (!email || !password || !email.includes('@') || password.trim().length < 7) {
    response
      .status(422)
      .json({ message: 'Invalid Input : your message might have less than 7 chars.' });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const hasedPassword = await hashPassword(password);

  const result = await db.collection('user').insertOne({
    email: email,
    password: hasedPassword,
  });

  response.status(201).json({ message: 'User Created' });
  // return result;
}

export default handler;
