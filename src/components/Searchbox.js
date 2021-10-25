import React from 'react';


const Searchbox = ({searchfeild1,searchChange,searchChange2,searchfeild2}) =>{
	return (
		<div>
			<div className='pa2'>
				<input className='pa3 ba b--green bg-lightest-blue' 
				type='search' 
				placeholder='search students'
				onChange={searchChange}
				/>
			
			</div>
			<div className='pa2'>
				<input className='pa3 ba b--green bg-lightest-blue' 
				type='search' 
				placeholder='search tags'
				onChange={searchChange2}
				/>
			
			</div>



		</div>
	)

}
















export default Searchbox;