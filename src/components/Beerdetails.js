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
            return (
                <div className="container">
                    <div className="beer-box">
                        <a href="/" role="button" className="button">back</a>
                    </div>
                    <div className="beer-info beer-box">
                        <img src={this.state.beer.image_url} className="beer-img" alt={this.state.beer.name} />
                        <div className="beer-data">
                            <h2>{this.state.beer.name}</h2>
                            <h3>{this.state.beer.tagline}</h3>
                            
                            <p>{this.state.beer.description}</p>
                            
                            <h3>Pair with:</h3>
                            <ul className="food-pair">
                                <li><i className="fa fa-circle" aria-hidden="true"></i> {this.state.beer.food_pairing[0]}</li>
                                <li><i className="fa fa-circle" aria-hidden="true"></i> {this.state.beer.food_pairing[1]}</li>
                                <li><i className="fa fa-circle" aria-hidden="true"></i> {this.state.beer.food_pairing[2]}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else {
            return ( <div>Loading data...</div> )
        }

	}
}

export default Beerdetails