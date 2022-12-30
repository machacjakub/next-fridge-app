export type TState = 'toBuy' | 'inFridge' | 'open' | 'deleted';
export type TCategory = 'Diary' | 'Fruit' | 'Vegetable' | 'Meat' | 'Egg' | 'Other';
export interface IItem {
    id: number;
    name: string;
    expire: string;
    count: number;
    state: TState;
    category: TCategory;
}

export type TItems = IItem[]