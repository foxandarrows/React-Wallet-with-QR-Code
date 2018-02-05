import React, { Component } from 'react';
var QRCode = require('qrcode.react');

export default class QRcode extends Component {
  render() {
    return (
      <QRCode value="http://facebook.github.io/react/" />
    );
  }
}

  