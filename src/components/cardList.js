import React from 'react';
import Card from './Card.js';

let first = true
let cardTagslist = []
let updatedData=[]

class Cardlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.updateCard=this.updateCard.bind(this)

	}



	calculateAverage(array) {
	    var total = 0;
	    var count = 0;

	    array.forEach(function(item, index) {
	        let dig = parseInt(item);
	        total += dig;
	        count++;
	    });

	    return total / count;
		}	

		

		updateCard(data){
			if (first){
			const oldData = JSON.parse(JSON.stringify(this.props.robots));
			  
			 updatedData = oldData.map((robots,i)=>{
				if(robots.id === data.id ){
					robots.tags = data.tags[0]
						return robots
				}else{
					return robots
				}
			})
			 first = false

			}else{

				 	const oldData = JSON.parse(JSON.stringify(updatedData));
				  
				 updatedData = oldData.map((robots,i)=>{
						if(robots.id === data.id ){
							robots.tags = data.tags[0]
								return robots
						}else{
							return robots
						}
					})
				 }
	}



	render(){

		const carCompClone = [
			  ...this.props.robots
			].map(i => ({ ...i}));


	
	let carComp = carCompClone.map((user,i) =>{
		return <Card 
		key={i} 
		updateCard={this.updateCard}
		id={user.id} 
		tags={user.tags}
		firstName={user.firstName} 
		lastName={user.lastName} 
		skill={user.skill}
		average={this.calculateAverage(user.grades)}
		company={user.company}
		pic={user.pic} 
		grades={user.grades}
		email={user.email} />
	}) 


	if (first===true){
		const filterRobots = carComp.filter((robots,i) => {
				if (robots.props.firstName.toLowerCase().includes(this.props.searchfeild1.toLowerCase()) || robots.props.lastName.toLowerCase().includes(this.props.searchfeild1.toLowerCase())){
	
							return robots
				} 
			}
			)
		return (
		<div>
			{filterRobots}
		</div>
		
		)
	}else{



		let searchfeild2 = this.props.searchfeild2.toLowerCase()
		const filterRobots = carComp.filter((robots,i) => {
				if (robots.props.firstName.toLowerCase().includes(this.props.searchfeild1.toLowerCase()) || robots.props.lastName.toLowerCase().includes(this.props.searchfeild1.toLowerCase())){
					let temp = robots
					let j = 0 
					if (searchfeild2.length > 0){ 
						if (updatedData[i].tags.length>0){
							updatedData[i].tags.filter(tag=>{
							let temp1 = temp
							if((j===0)  && tag.toLowerCase().includes(searchfeild2)){
								j++
							} 
						})
						}
						if (j===1){
							return robots
						}
					}

					else{
						return robots
					}
				} 
			}
			)
		return (
		<div>
			{filterRobots}
		</div>
		
		)
	}
	
	}
	
}

export default Cardlist;