import { IItem, TItems } from "../pages/types";
import { items } from "./data";

const fs = require( 'fs' );

export const readData = (): TItems => {
	  return [...items];
};

export const changeItem = async ( i: number, itemBody: IItem ) => {
	const newItems = [...items];
	newItems[i] = itemBody;
	await storeData( newItems );
	console.log( 'changeItem - ' + JSON.stringify( itemBody ) );
	console.log( 'item changed' );
	return newItems;
};

export const appendItem = async ( item: IItem ) => {
	const newItems = [...items, item];
	await storeData( newItems );
	console.log( 'item appended' );
	return newItems;
};

const storeData = async ( data: any ) => {
	try {
		await fs.promises.writeFile( './database/data.ts', `import { TItems } from "../pages/types";\nexport const items: TItems = ${JSON.stringify( data )};` );
	} catch ( err ) {
		console.error( err );
	}
};