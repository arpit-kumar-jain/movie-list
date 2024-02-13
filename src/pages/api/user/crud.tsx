import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const client = new MongoClient(process.env.MONGODB_URI || '');

      await client.connect();
      const db = client.db();

      switch (req.method) {
        case 'GET':
          let posts = await db.collection('movies').find({}).toArray();
          res.status(200).json(posts);

          break;

        case 'POST':

          const newPost = req.body;
          const result = await db.collection('movies').insertOne(newPost);
          res.status(201).json(result);

          break;

        default:

          res.status(405).json({ error: 'Unsupported HTTP method' });

      }
      await client.close();

  }

   