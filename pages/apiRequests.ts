import { IItem, IItemToAdd } from "./types";

export const postRequest = async ( {name, expire, count, category, state}:IItemToAdd ) => {
	try {
		const response = await fetch( '/api/items', {
			method: 'POST',
			body: JSON.stringify(
				{
					name: name,
					expire: expire,
					count: count,
					category: category,
					state: state //TODO - aby slo pridat jen na listy toBuy a inFridge
				}
			),
			headers: {
				'Content-Type': 'application/json'
			}
		} );
		const data = await response.json();
		return data;
	} catch ( error ) {
		console.error( error );
		return error;
	}
};

export const putRequest = async ( item: IItem ) => {
	const response = await fetch( `/api/items/${item.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer abcdefghijk'
		},
		body: JSON.stringify( item )
	} );
	return await response.json();
};