import { IItem, TItems } from "../pages/types";
import { items } from "./data";
import { getIndexById } from "./utils";

let itemIdCounter = items.length - 1;

export const updateItem = ( id: string, queryArguments: any, elementList: TItems ) => {
	const elementIndex = getIndexById( id, elementList );
	if ( elementIndex === -1 ) {
		throw new Error( 'updateElement must be called with a valid id parameter' );
	}
	if ( queryArguments.id ) {
		queryArguments.id = Number( queryArguments.id );
	}
	Object.assign( elementList[elementIndex], queryArguments );
	return elementList[elementIndex];
};

export const createItem = ( queryArguments: any ): IItem|false => {
	console.log( 'createItem' );
	if ( queryArguments.hasOwnProperty( 'name' ) &&
        queryArguments.hasOwnProperty( 'expire' ) &&
        queryArguments.hasOwnProperty( 'count' ) &&
        queryArguments.hasOwnProperty( 'state' ) &&
        queryArguments.hasOwnProperty( 'category' ) ) {
		console.log( 'createItem - true' );
		let currentId:number;
		itemIdCounter += 1;
		currentId = itemIdCounter;
		return {
			'id':    currentId,
			'name': queryArguments.name,
			'expire':  queryArguments.expire,
			'count':  queryArguments.count,
			'state':  queryArguments.state,
			'category':  queryArguments.category,
		};
	} else {
		return false;
	}
};