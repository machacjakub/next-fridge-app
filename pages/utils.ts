import { TState } from "./types";

export const belongsToPage = (itemState: string, page: string) :boolean => itemState === page || (itemState === 'open' && page === 'inFridge');
export const returnNext = (state: TState) :TState => {
    switch(state){
        case 'toBuy':
            return 'inFridge';
        case 'inFridge':
            return 'open';
        default:
            return 'deleted'
    }
}