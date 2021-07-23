import React,{Component} from 'react';
// import {robots} from './Robots.js';
import CardList from '../components/cardList.js';
import Searchbox from '../components/Searchbox.js';
import Scroll from '../components/scroll.js';
import './app.css';
class App extends Component  {
	constructor(){
		super();
		this.state={
			robots: [],
			searchfeild: ''

		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>this.setState({robots: users}))
		
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
					<Scroll>
						<CardList robots={filterRobots}/>
					</Scroll>
				</div>
			)
	}
}
export default App;