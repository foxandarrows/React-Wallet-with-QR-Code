import React from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './Copy.css';
 
export default class Copy extends React.Component {
  state = {
    value: 'QSDFLJ2435LFGJ2345',
    copied: false,
  };
 
  render() {
    return (
      <div>
       
        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <span id="copy-deposit" className="right-align col offset-s1 s5 offset-m1 m5">
            <a class="modal-trigger" href="#modal1">Copy your deposit adress</a>
          </span>
        </CopyToClipboard>

        <div id="modal1" class="modal">
            <div class="modal-content">
              <h5>
              {this.state.copied ? <span style={{color: '#2aba9d'}}>Copied!</span> : null}
              </h5>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">OK</a>
            </div>
        </div>

        <input id="copy-value" className="left-align col offset-s1 s5 offset-m1 m5" value={this.state.value}
          onChange={({target: {value}}) => this.setState({value, copied: false})}
          readOnly/>
      
        
      </div>
    );
  }
}
 





