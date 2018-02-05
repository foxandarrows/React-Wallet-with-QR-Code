import React, { Component } from 'react';
import ethereum from './img/logo-ethereum.png';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import './Wallet.css';
import './Copy.css';
import Copy from './Copy.js';
import QRcode from './QRcode.js';

require ('./js/styles-javascript.js');



class Wallet extends Component {

    constructor(props) {
        super(props);
        this.handleToogle = this.handleToogle.bind(this);
        this.state = {hide: true};
    }

    handleToogle() {
        this.setState({hide: !this.state.hide});
    }

  render() {
    return (
      <div className="container row">

        <div id="presentation" className="col offset-s2 s8 offset-s2 center-align">
            <p>To get started, make a deposit!</p>
        </div>
        <div id="title-wallet" className="col offset-s2 s8 offset-s2 left-align">
            <img id="icon-ethereum" src={ethereum} />
            <h3>Ethereum Wallet</h3>
        </div>

        <div id="wallet" className="col offset-s2 s8 offset-s2 center-align">
            
            <div id="total-balance">
                <p id="title-total-balance">Total balance</p>
                <h3>0.95 ETH</h3>
                <h5>254.56 euros</h5>
            </div>
        </div>

        <div id="footer-wallet" className="col offset-s2 s8 offset-s2 center-align">
            <button id="deposit" onClick={this.handleToogle}>Deposit</button>
            {/* {this.state.hide ? <Copy /> : <QRcode /> } */}
            <div className={'hide-' + this.state.hide}>
                <br/>
                <Copy />
                <br /><br />
                <QRcode />
            </div>

        </div>

    </div>
    );
  }
}

export default Wallet;
