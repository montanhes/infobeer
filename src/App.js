import React, { Component } from 'react';
import axios from 'axios'
import './App.css'
import './reset.css'

class App extends Component {

constructor(props) {
  super(props)
  this.state = { beerList: null }
  this.handleGetBeers = this.handleGetBeers.bind(this)
  this.handleBeerList = this.handleBeerList.bind(this)
}

componentWillMount() {
  this.handleGetBeers()
}

handleGetBeers() {
  axios.get('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6')
  .then(function (response) {
    // handle success
    console.log(response.data)
    this.setState({ beerList: response.data })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

handleBeerList() {
  if(this.state.beerList) {
    const list = this.state.beerList.map(function(beer){
      return (
        <li className="beer">
          <a href="">
            <div className="beer-icon">
              <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
            </div>
            <div className="beer-data">
              <p className="beer-name">{beer.name}</p>
              <p className="beer-tagline">{beer.tagline}</p>
            </div>
          </a>
        </li>
      )
    })
   return list 
  }
}

  render() {
    return (
      <div className="">
        <header className="header">
          <div className="container">
            <h1 className="site-title">info<span>Beer</span></h1>
          </div>
        </header>
        <div className="container">
          <div className="search-bar">
            <input type="text" placeholder="Busca" />
          </div>
          <ul className="beer-list">
            {this.handleBeerList()}
          </ul>
        </div>
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;