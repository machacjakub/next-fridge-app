export type TState = 'toBuy' | 'inFridge' | 'open' | 'deleted';
export type TCategory = 'diary' | 'fruit' | 'Vvgetable' | 'meat' | 'egg' | 'other';
export interface IItem {
    id: number;
    name: string;
    expire: string;
    count: number;
    state: TState;
    category: TCategory;
}
export interface IFormData {
    name: string;
    expire: string;
    count: number;
    category: TCategory;
}

export type TItems = IItem[]