import React from 'react';
import './App.css';

function App() {
    var car = {
        mileage: 111232,
        carId: 10,
        options: {'interior': 'leather', 'exterior': 'plastic', 'stuff': 'blah', 'id': 1},
        key: 12
    };
    var car2 = {
        mileage: 111232,
        carId: 10,
        options: {'interior': 'leather', 'exterior': 'plastic', 'stuff': 'blah', 'id': 2},
        key: 13
    };
    return (
        <div className="App">
            <CarDisplay x={2} cars={[car, car2]} y={1}></CarDisplay>
        </div>
    );
}

function CarCard({car}) {
    return <div className="card col-md-2">
        <img className="card-img-top" src="../images/car1.jpeg" alt="Car cap"></img>
        <div className="card-body" style={{paddingLeft: 0}}>
            <div className="card-title" style={{marginBottom: 0}}><b>Details</b></div>
            <CarMileage mileage={car.mileage}></CarMileage>
            <CarColor color={car.color}></CarColor>
            <CarOptions options={car.options}></CarOptions>
            <a href="#test" className="col-md-12 btn btn-primary btn-lg text-center"
               style={{marginLeft: 10}}>Details</a>
        </div>
    </div>;
}

function CarColor({color}) {
    return (color !== undefined) ?
        <div className="card-text"><b>Color:</b> {color}</div>
        : <div className="card-text"><b>Color:</b> As Shown.</div>;
}

function CarMileage({mileage}) {
    return (mileage !== undefined) ?
        <div className="card-text"><b>Mileage:</b> {mileage}</div>
        : <div className="card-text"><b>Mileage:</b> Not Listed</div>;
}

function CarOptions({options}) {
    var optionsList;
    var count = 0;
    for (var key in options) {
        count += 1;
        if (count <= 2) {
            var optionItem = <li><b>{key}:</b> {options[key]}</li>;
            optionsList = [optionsList, optionItem];
        }
    }
    ;
    optionsList = [optionsList, <div>...</div>];

    options = '';
    return (options !== undefined) ?
        <ul className="card-text"><b>Options:</b>
            &emsp;
            {optionsList}
        </ul> : '';
}

function CarDisplay(props) {
    var cars = props.cars;
    var x = props.x;
    var y = props.y;
    var carDisplay;

    for (let i = 0; i < x; i++) {
        for (let i2 = 0; i2 < y; i2++) {
            let index = i + i2;
            let car = cars[i + i2];

            if (car !== undefined) {
                carDisplay = [carDisplay, <CarCard key={car.key} car={car}></CarCard>];
            }
        }
    }
    return carDisplay;
}

export default App;
