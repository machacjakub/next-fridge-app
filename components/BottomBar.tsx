import * as React from 'react';
import Item from './Item';
import AddItemButton from './AddItemButton';
import ChangeListButton from './ChangeListButton';

function BottomBar({handlePageChange}:any) {
  return (
    <div style={{
      display: "flex",
      justifyContent: 'space-around',
      position: 'fixed',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '50px',
      backgroundColor: 'white',
    }}>
      <ChangeListButton handlePageChange={handlePageChange} direction={-1}/>
      <AddItemButton />
      <ChangeListButton handlePageChange={handlePageChange} direction={1}/>
    </div>
  );
}

export default BottomBar;
