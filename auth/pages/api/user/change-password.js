import { getSession } from 'next-auth/react';
import { hashPassword, verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db-helper';

async function handler(request, response) {
  if (request.method !== 'PATCH') return;

  const client = await connectToDatabase();
  const userCollection = client.db().collection('user');

  const session = await getSession({ req: request });
  if (!session) {
    response.status(401).json({ message: 'Not authenticated' });
    return;
  }

  const user = await userCollection.findOne({ email: session.user.email });
  if (!user) {
    response.status(404).json({ message: 'User not foud.' });
    client.close();
    return;
  }

  const oldPassword = request.body.oldPassword;
  const newPassword = request.body.newPassword;

  const currentPassword = user.password;
  const passwordsaAreEqual = await verifyPassword(oldPassword, currentPassword);
  if (!passwordsaAreEqual) {
    response.status(403).json({ message: 'Invalid password' });
    client.close();
    return;
  }

  const hasedPassword = await hashPassword(newPassword);
  const result = await userCollection.updateOne(
    { email: user.email },
    {
      $set: {
        password: hasedPassword,
      },
    }
  );

  client.close();
  response.status(200).json({ message: 'Password sucessfully updated' });
}

export default handler;
