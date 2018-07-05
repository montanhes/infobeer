import React, { Component } from 'react'
import Beerlist from './Beerlist'

class Home extends Component {

	render() {
		return (
            <div>
                <div className="search-bar">
                    <input type="text" placeholder="Search!" />
                </div>
                <Beerlist />
            </div>
		)
	}
}

export default Home