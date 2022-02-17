import { MongoClient } from 'mongodb';
import 'dotenv/config';

export const connectDatabase = async () => {
  const client = await MongoClient.connect(process.env.DB);
  return client;
};

export const insertDocument = async (client, collection, document) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
};

export const getAllDocuments = async (client, collection, sort, filter = {}) => {
  const db = client.db();
  const documents = await db.collection(collection).find(filter).sort(sort).toArray();
  return documents;
};
