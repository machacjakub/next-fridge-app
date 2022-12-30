// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {items} from '../../db/data'
import { createItem } from '../../db/dbUpdate'
import { IItem, TItems } from '../types'

type Data = TItems|IItem|string

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    query: { id, name },
    method,
  } = req

  switch (method) {
    case 'GET':
      res.status(200).json(items)
      break
    case 'POST':
      console.log('post requeeeeest')
      const receivedItem = createItem('items', req.query);
      if (receivedItem) {
        items.push(receivedItem);
        res.status(201).send(receivedItem);
      } else {
        res.status(400).send('Error - not created');
      }
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}