import React, { Component } from 'react'
import Beer from './Beer'
import axios from 'axios'

class Beerlist extends Component {

    constructor(props) {
        super(props)
        this.state = { beerList: null }
        this.handleBeerList = this.handleBeerList.bind(this)
    }
    
    componentDidMount() {
        axios.get('https://api.punkapi.com/v2/beers', {
            params: {
                brewed_before: "11-2012",
                abv_gt: 6
            }
        })
        .then(response => {
        console.log(response.data)
            this.setState({ beerList: response.data })
        })
        .catch(function (error) {
            console.log(error)
        })
        .then(function () {
            // always executed
        })
    }

    handleBeerList() {
        if(this.state.beerList) {
            const list = this.state.beerList.map(beer => {
                return (
                    <Beer 
                        key={beer.id} 
                        id={beer.id} 
                        name={beer.name} 
                        tagline={beer.tagline} 
                    />
                )
            })
        return list 
        } else {
            return ( <div>empty</div> )
        }
    }

	render() {
		return (
            <ul className="beer-list">
                {this.handleBeerList()}
            </ul>
		)
	}
}

export default Beerlist