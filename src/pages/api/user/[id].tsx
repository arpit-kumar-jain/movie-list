import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient, ObjectId } from 'mongodb';


export default async function handler(req:NextApiRequest, 
    res:NextApiResponse, params : any
    ) 
{
    
    const client = new MongoClient(process.env.MONGODB_URI || '');
    let { id } = req.query;
    await client.connect();
    const db = client.db();

    switch (req.method) {
    case 'GET':
        let post_movie = await db.collection('movies').findOne({"_id":new ObjectId(id)});
        res.status(200).json(post_movie);

        break;

    case 'PUT':
        // let obj = await db.collection(
        //     'movies').findOne({"_id":new ObjectId(id)});
        
        // let data = req.body
        
        // let update_movie = await db.collection('movies').updateOne(
        //     {"_id":new ObjectId(id)})

        break;

    case 'DELETE':
        let delete_movie = await db.collection('movies').deleteOne({"_id":new ObjectId(id)});
        res.status(200).json(delete_movie);
        break;
    default:
        res.status(405).json({ error: 'Unsupported HTTP method' });
    }
    await client.close();
  }

   