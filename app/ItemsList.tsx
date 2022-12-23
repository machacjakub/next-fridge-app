//'use client';

type State = 'toBuy' | 'inFridge' | 'open' | 'deleted';
type Category = 'Diary' | 'Fruit' | 'Vegetable' | 'Meat' | 'Egg' | 'Other';
interface IItem {
    id: number;
    name: string;
    expire: string;
    count: number;
    state: State;
    category: Category;
  }

export const ItemsList = ({items}:any) => {
    return (
        <ul>
        {items.map((item: IItem ) => (
          <li
            key={item.id}
          >
            <p key={item.id}>{item.name}</p>
          </li>
        ))}
      </ul>
    );
  }