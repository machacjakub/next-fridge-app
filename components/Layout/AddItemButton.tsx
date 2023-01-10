import { PlusOutlined } from '@ant-design/icons';
import * as React from 'react';

interface IProps {
  handleClick: () => void;
}

function AddItemButton( {handleClick}:IProps ) {
	return (
		<div style={{
			color: 'gray',
			textAlign: 'center',
			marginTop: '12px'
		}} onClick={handleClick}>
			<p style={{ marginTop: '-8px', fontSize: '40px'}}>
				<PlusOutlined />
			</p>
		</div>
	);
}

export default AddItemButton;
