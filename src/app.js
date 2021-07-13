import React,{Component} from 'react';
import {robots} from './Robots.js';
import CardList from './cardList.js';
import Searchbox from './Searchbox.js';
class App extends Component  {
	constructor(){
		super();
		this.state={
			robots: robots,
			searchfeild: ''

		}
	}

	oSearch = (event) => {
		this.setState({ searchfeild: event.target.value})

	}

	render(){
		const filterRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase())
		})
		return(
				<div className='tc'>
					<h1>Robofriends</h1>
					<Searchbox searchChange={this.oSearch} /> 
					<CardList robots={filterRobots}/>
				</div>
			)
	}
}
export default App;