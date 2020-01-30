import React from 'react';
import './App.css';
import Car from "./car-card";

function App() {
  var car = {
    mileage: 111232,
    carId: 10,
    options: {'interior': 'leather', 'exterior': 'plastic', 'stuff': 'blah'}
  };
  return (
    <div className="App">
      <CarCard props={car}></CarCard>
    </div>
  );
}

function CarCard(props) {
  return <div className="card col-md-2">
    <img className="card-img-top" src="../images/car1.jpeg" alt="Car cap"></img>
    <div className="card-body" style={{paddingLeft: 0}}>
      <div className="card-title" style={{marginBottom: 0}}><b>Details</b></div>
      <carMileage props></carMileage>
      <color props></color>
      <carOptions props></carOptions>
      <a href="#" className="col-md-12 btn btn-primary btn-lg text-center"
         style={{marginLeft: 10}}>Details</a>
    </div>
  </div>;
}

function carColor({color}) {
  return color = (color !== undefined) ?
      <div className="card-text"><b>Color:</b> {color}</div>
      : <div className="card-text"><b>Color:</b> As Shown.</div>;
}

function carMileage({mileage}) {
  return carMileage = (mileage !== undefined) ?
      <div className="card-text"><b>Mileage:</b> {mileage}</div>
      : <div className="card-text"><b>Mileage:</b> Not Listed</div>;
}

function carOptions({options}) {
  var optionsList;
  var count = 0;
  for (var key in options) {
    count += 1;
    if (count <= 2) {
      var optionItem = <li><b>{key}:</b> {options[key]}</li>;
      optionsList = [optionsList, optionItem];
    }
  };
  optionsList = [optionsList, <div>...</div>];

  var options = '';
  return (options !== undefined) ??
      <div className="card-text"><b>Options:</b>
        &emsp;
        <ul>
          {optionsList}
        </ul>
      </div>;
}

function CarDisplay(props) {
  var cars = props.cars;
  var x = props.x;
  var y = props.y;
  var carDisplay;
  for(let i = 0; i < x; i++) {
    for(let i2 = 0; i2 < y; i2++) {
      var index = i + i2;
      if(cars[index] !== undefined) {
        carDisplay += <CarCard props={cars[index]}></CarCard>
      }
    }
    
  }
}

export default App;
