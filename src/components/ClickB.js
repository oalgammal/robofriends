import React from 'react';
const ClickB = (grades)=>{
	let text = "";
	grades.grades.map((item,index) => {
		index+=1
	   text += "Test" + index + ": " + item + '\n'
	   console.log(text)
	})
	return(<pre>{text}</pre>)
}


export default ClickB
