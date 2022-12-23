import React from 'react';
import { ItemsList } from '../ItemsList';

const ToBuy = () => {
    const items = [
        {
          id: 0,
          name: 'Šunka krůtí',
          expire: '2022-12-15',
          count: 10,
          state: 'inFridge',
          category: 'Diary',
        },
        {
          id: 1,
          name: 'Jablko',
          expire: '2022-10-30',
          count: 1,
          state: 'inFridge',
          category: 'Fruit',
        },
        {
          id: 2,
          name: 'Řecký jogurt',
          expire: '2022-11-28',
          count: 4,
          state: 'toBuy',
          category: 'Diary',
        },
        {
          id: 3,
          name: 'Ovesné mléko',
          expire: '2022-11-20',
          count: 1,
          state: 'deleted',
          category: 'Other',
        },
        {
          id: 4,
          name: 'Gervais',
          expire: '2022-12-1',
          count: 1,
          state: 'open',
          category: 'Diary',
        },
      ]
    return (
        <div>
            <ItemsList items={[{name: 'Jakub'}]}/>
        </div>
    );
};

export default ToBuy;