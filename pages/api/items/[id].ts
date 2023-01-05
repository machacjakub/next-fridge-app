import type { NextApiRequest, NextApiResponse } from 'next';
import { items } from '../../../database/data';
import { updateItem } from '../../../database/dbUpdate';
import { getElementById, getIndexById } from '../../../database/utils';

export default function userHandler( req: NextApiRequest, res: NextApiResponse ) {
	const {
		query: { id },
		method,
	} = req;

	switch ( method ) {
	case 'GET':
		console.log( '--- GET item ' + id );
		const foundItem = getElementById( id, items );
		if ( foundItem ) {
			res.send( foundItem );
		} else {
			res.status( 404 ).send( 'Error - item does not exist' );
		}
		break;
	case 'PUT':
		console.log( '--- PUT item ' + id );
		const idxToUpdate = getIndexById( id, items );
		console.log( 'updateeeee' );
		if ( idxToUpdate !== -1 ) {
			updateItem( id, req.body, items );
			res.send( items );
		} else {
			res.status( 404 ).send( 'Error - item not updated' );
		}
		break;
	case 'DELETE':
		console.log( '--- DELETE item ' + id );
		const idxToDelete = getIndexById( id, items );
		if ( idxToDelete !== -1 ) {
			items.splice( idxToDelete, 1 );
			res.status( 204 ).send();
		} else {
			res.status( 404 ).send();
		}
		break;
	default:
		res.setHeader( 'Allow', ['GET', 'PUT'] );
		res.status( 405 ).end( `Method ${method} Not Allowed` );
	}
}