import { IItemToAdd } from "../pages/types";

export const isValidItem = ( item: IItemToAdd ): boolean => {
	if ( item.hasOwnProperty( 'name' ) &&
        item.hasOwnProperty( 'expire' ) &&
        item.hasOwnProperty( 'count' ) &&
        item.hasOwnProperty( 'state' ) &&
        item.hasOwnProperty( 'category' ) ) {
		console.log( 'validation' );
		return true;
	}
	return false;
};