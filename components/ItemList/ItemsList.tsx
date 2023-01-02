//'use client';

import { AnimatePresence, motion } from "framer-motion";
import { IItem } from "../../pages/types";
import Item from "./Item";

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