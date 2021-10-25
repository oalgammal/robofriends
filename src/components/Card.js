import React,{ Component ,useEffect} from 'react';
import ReactDOM from 'react-dom';	
import ClickB from './ClickB.js';
import Tag from './Tag.js';

let id = ''
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
    this.tagContainer =this.tagContainer.bind(this);
  }

	handleClick(){
	    this.setState(prevState => ({
	      isToggleOn: !prevState.isToggleOn
	    }));
	  }

	tagContainer(tagsArray){

		const clone = JSON.parse(JSON.stringify(this.props))
		const deepClone = JSON.parse(JSON.stringify(this.props.tags))

		let difference=[]
		if (tagsArray.length > deepClone.length){
			difference = tagsArray.filter(x => !deepClone.includes(x));
			let newTags=[]
			difference.forEach(element => { const count = deepClone.push(element)})
	  	newTags.push(deepClone)
	  	clone.tags=newTags
	  	this.props.updateCard(clone)
	  	tagsArray.length=0
	  }else{
     			return this.props.tags

      }
	  difference=[]
	  }
	

	  

	render(firstName,company,tags,average,lastName,skill,grades,pic,email,id){
		return(
			<div className='bg-light-green db flex br3 pa0  ma4  bw2 shadow-5'>
				<img alt='jane' src={this.props.pic} className='h3 w-15 pa0 ma2 mr5 br-100 outline' />
				<div className='w-90 tl'>
					<h2 className='mt0 mb1'>{this.props.firstName} {this.props.lastName}</h2>
					<p className='ma0'>Email: {this.props.email}</p>
					<p className='ma0'>Company: {this.props.company}</p>
					<p className='ma0'>Skill: {this.props.skill}</p>
					<p className='ma0'>Average: {this.props.average}</p>
					<div  id='demo'>
					{
						this.state.isToggleOn
						?<ClickB grades={this.props.grades}/>
						:<p></p>
					}					
					</div>
					<Tag  tagChangeCard={this.tagContainer} />
				</div>
				<button style={{'font-size' : '50px'}} type="button" className='w-20' onClick={this.handleClick}>{this.state.isToggleOn ? '-' : '+'}</button>
			</div>
		);
		
	}
}
export default Card;