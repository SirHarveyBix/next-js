import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDatabase } from '../../../lib/db-helper';
import { verifyPassword } from '../../../lib/auth';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectToDatabase();
        const userCollection = client.db().collection('user');

        const user = await userCollection.findOne({ email: credentials.email });
        if (!user) {
          client.close();
          throw new Error('No user Found !');
        }

        const isValid = await verifyPassword(credentials.password, user.password);
        if (!isValid) {
          client.close();
          throw new Error('Could not log you in');
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
});
