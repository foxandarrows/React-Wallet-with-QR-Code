import React from 'react';
import ReactDOM from 'react-dom';

import Wallet from './Wallet';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Wallet />, document.getElementById('root'));
registerServiceWorker();
