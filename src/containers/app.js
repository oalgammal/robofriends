import React,{Component} from 'react';
import Cardlist from '../components/Cardlist.js';
import Searchbox from '../components/Searchbox.js';
import Scroll from '../components/scroll.js';
import './app.css';
class App extends Component  {
	constructor(){
		super();
		this.state={
			robots:[] ,
			searchfeild1: '',
			searchfeild2:'',

		}
	}
	componentDidMount(){
		fetch('https://api.hatchways.io/assessment/students')
		.then(response=> response.json())
		.then(data=>{
			let temp = data.students
			var emptyTag = []
			temp.forEach(robot=>robot.tags=emptyTag)
			this.setState({robots:temp})
			}
		)
		
	} 

	
	oSearch = (event) => {
		this.setState({ searchfeild1: event.target.value})
		event.preventDefault();

	}

	oSearch2 = (event) => {
		this.setState({ searchfeild2: event.target.value})
		event.preventDefault();
	
	}


	render(){
		
		return(
				<div className='tc'>
					<h1>students</h1>
					<Searchbox searchChange={this.oSearch} searchChange2={this.oSearch2} /> 
					<Scroll>
						<Cardlist searchfeild2={this.state.searchfeild2} searchfeild1={this.state.searchfeild1} robots={this.state.robots}/>
					</Scroll>
				</div>
			)
	}
	componentDidUpdate(){
		window.scrollTo(0, 0)
	}
}
export default App;