import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Car from './car-view.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Car mileage={111232} carId={10} options = {{'interior': 'leather', 'exterior': 'plastic', 'stuff': 'blah'}}></Car>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
