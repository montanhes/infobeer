import React, { Component } from 'react'

class Beer extends Component {

	render() {
		return (
            <li className="beer">
                <a href={`/beer/${this.props.id}`}>
                    <div className="beer-icon">
                        <img className="beer-svg" src={`/imgs/0${Math.floor(Math.random() * 4) + 1}-beer.svg`} alt={`0${Math.floor(Math.random() * 4) + 1}-beer.svg`} />
                    </div>
                    <div className="beer-data">
                        <p className="beer-name">{this.props.name}</p>
                        <p className="beer-tagline">{this.props.tagline}</p>
                    </div>
                </a>
            </li>
		)
	}
}

export default Beer