import { IItemToAdd,} from "../pages/types";
import { appendItem, changeItem, readData } from "./dbUpdate";
import { isValidItem } from "./validation";

export const updateItem = async ( i: number, item: any ) => {
	if ( i === -1 ) {
		throw new Error( 'updateElement must be called with a valid id parameter' );
	}
	console.log( 'updateItem: item ' + i + ' = ' + JSON.stringify( item ) );
	const newItems = await changeItem( i, item );
	return newItems ;
};

export const createItem = async ( item: IItemToAdd ) => {
	if ( isValidItem( item ) ) {
		const newId = readData().length+1;
		const newItem = { id: newId, ...item };
		console.log( 'createItem1' );
		const newItems = await appendItem( newItem );
		return newItems;
	} else {
		return false;
	}
};