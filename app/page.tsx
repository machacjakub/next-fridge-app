import React from 'react';
import { ItemsList } from './ItemsList';
import { items } from '../data';

const page = () => {
    return (
        <div>
            <ItemsList items={items}/>
        </div>
    );
};

export default page;