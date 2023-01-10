// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { createItem} from '../../database/apiHandlers';
import { readData } from '../../database/dbUpdate';
import { IItem, TItems } from '../types';

type Data = TItems|IItem|string

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const {
		method,
	} = req;

	switch ( method ) {
	case 'GET':
		console.log( '--- GET all' );
		const data: TItems = readData();
		res.status( 200 ).json( data );
		break;
	case 'POST':
		console.log( '--- POST ' );
		const newItems = await createItem( req.body );
		if ( newItems ) {
			console.log( 'item created, newItems returned (POST)' );
			res.status( 201 ).send( newItems );
		} else {
			res.status( 400 ).send( 'Error - not created' );
		}
		break;
	default:
		res.setHeader( 'Allow', ['GET', 'PUT'] );
		res.status( 405 ).end( `Method ${method} Not Allowed` );
	}
}