import React from "react";
import * as ReactBootstrap from "react-bootstrap";

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
          <h1>Crypto Monitor</h1>
          <br />
          <ul>
            {this.state.cryptos.map(crypto => {
              return <li key={`crypto-${crypto.id}`}>
                  <div>{crypto.name}</div>
                  <div>€{crypto.price}</div>
                  <br />  
                  </li>
            })}
          </ul>
        </div>
      )
    }
  }