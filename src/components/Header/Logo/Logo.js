import React, { Component } from 'react';

import './Logo.css';
import {ReactComponent as logo} from './logo.svg';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <logo />
      </div>
    );
  }
}

export default Logo;
