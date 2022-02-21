import { MongoClient } from 'mongodb';
import 'dotenv/config';

export const connectDatabase = async () => {
  const client = await MongoClient.connect(process.env.DB);
  return client;
};
