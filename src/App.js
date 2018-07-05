import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Beerdetails from './components/Beerdetails'
import Home from './components/Home'
import './reset.css'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="">
				<header className="header">
					<div className="container">
						<a href="/" className="site-title ">
							<h1>info<span>Beer</span></h1>
						</a>
					</div>
				</header>
				<div className="container">
					<Router>
						<div>
							<Route exact path="/" component={Home}/>
							<Route exact path="/beer/:id" component={Beerdetails}/>
						</div>
					</Router>
				</div>
				<footer>
				</footer>
			</div>
		);
	}
}

export default App;