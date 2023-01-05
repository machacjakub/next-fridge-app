// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import {items} from '../../database/data';
import { createItem } from '../../database/dbUpdate';
import { IItem, TItems } from '../types';

type Data = TItems|IItem|string

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const {
		query: { id },
		method,
	} = req;

	switch ( method ) {
	case 'GET':
		console.log( '--- GET all' );
		res.status( 200 ).json( items );
		break;
	case 'POST':
		console.log( '--- POST ' );
		const receivedItem = createItem( req.body );
		if ( receivedItem ) {
			items.push( receivedItem );
			res.status( 201 ).send( items );
		} else {
			res.status( 400 ).send( 'Error - not created' );
		}
		break;
	default:
		res.setHeader( 'Allow', ['GET', 'PUT'] );
		res.status( 405 ).end( `Method ${method} Not Allowed` );
	}
}