import React from 'react';


const Scroll=(props)=>{
	return(
		<div className='scrollbar' style={{ 'margin-bottom':'20px', overflowY:'scroll' , border:'1px solid black', height:'100%', position:'absolute' , width:'100%'}}>
			{props.children}
		</div>
	);
}

export default Scroll;