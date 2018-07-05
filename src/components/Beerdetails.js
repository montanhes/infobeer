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
                <div class="beer-info">
                    <img src={this.state.beer.image_url} className="beer-img" alt={this.state.beer.name} />
                    <div className="beer-data">
                        <h2>{this.state.beer.name}</h2>
                        <h3>{this.state.beer.tagline}</h3>
                        <p>{this.state.beer.description}</p>
                    </div>
                </div>
            )
        } else {
            return ( <div>This beers exist?</div> )
        }

	}
}

export default Beerdetails