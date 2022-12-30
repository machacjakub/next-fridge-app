//'use client';

import { AnimatePresence, motion } from "framer-motion";
import Item from "./Item";

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
      <AnimatePresence>
        {items ? items.map(  (item: IItem ) => (
          <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: 'spring',
            duration: 0.6,
            damping: 25,
          }}
          layout
        >
            <Item key={item.id} item={item} />
            </motion.div>
        )) : 'nodata'}
      </AnimatePresence>
    );
  }