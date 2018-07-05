import React, { Component } from 'react'

class Beer extends Component {

	render() {
		return (
            <li className="beer">
                <a href={`/beer/${this.props.id}`}>
                    <div className="beer-icon">
                        <i className="fa fa-beer" aria-hidden="true"></i>
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