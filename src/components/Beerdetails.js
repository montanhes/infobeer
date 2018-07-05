import React, { Component } from 'react'
import axios from 'axios'

class Beerdetails extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            id: this.props.match.params.id,
            beer: null
        }
    }

    componentDidMount(){
        axios.get(`https://api.punkapi.com/v2/beers/${this.state.id}`, {
        })
        .then(response => {
            console.log(response.data)
            this.setState({ beer: response.data[0] })
        })
        .catch(function (error) {
            console.log(error)
        })
        .then(function () {
            // always executed
        })
    }

	render() {
        if(this.state.beer) {
            console.log(this.state.beer)
            return (
                <div>
                    <h1>{this.state.beer.name}</h1>
                    <h3>{this.state.beer.tegline}</h3>
                    <p>{this.state.beer.description}</p>
                    <img src={this.state.beer.image_url} />
                </div>
            )
        } else {
            return ( <div>This beers exist?</div> )
        }

	}
}

export default Beerdetails