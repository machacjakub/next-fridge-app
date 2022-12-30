import type { NextApiRequest, NextApiResponse } from 'next'
import { items } from '../../../db/data';
import { updateItem } from '../../../db/dbUpdate';
import { getElementById, getIndexById } from '../../../db/utils';

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
        const foundItem = getElementById(id, items);
        if (foundItem) {
          res.send(foundItem);
        } else {
          res.status(404).send('Error - item does not exist');
        }
      break
    case 'PUT':
        const idxToUpdate = getIndexById(id, items);
        console.log('updateeeee')
        if (idxToUpdate !== -1) {
          updateItem(id, req.query, items);
          res.send(items[idxToUpdate]);
        } else {
          res.status(404).send('Error - item not updated');
        }
      break
    case 'DELETE':
        console.log('delete requeeeest')
        const idxToDelete = getIndexById(id, items);
        if (idxToDelete !== -1) {
            items.splice(idxToDelete, 1);
            res.status(204).send();
        } else {
            res.status(404).send();
        }
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}