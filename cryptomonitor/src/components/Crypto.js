import React from "react";

export default class Crypto extends React.Component {
    constructor() {
      super()
      this.state = { cryptos: [] }
    }
  
    async componentDidMount() {
      var myRequest = new Request("https://localhost:5001/crypto");
  
      await fetch(myRequest)
        .then(response => response.json())
        .then(data => {
          this.setState({ cryptos: data })
        })
    }
  
    render() {
      return (
        <div className="">
          <h1>Crypto List</h1>
          <ul>
            {this.state.cryptos.map(crypto => {
              return <li key={`crypto-${crypto.id}`}>
                  <div>ID: {crypto.id}</div>
                  <div>Name: {crypto.name}</div>
                  <div>Price: €{crypto.price}</div>
                  <br />  
                  </li>
            })}
          </ul>
        </div>
      )
    }
  }