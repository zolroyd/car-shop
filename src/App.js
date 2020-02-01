import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
            <NavHeader></NavHeader>
            <CarDisplay cars={[car, car2]} x='2' y='1'></CarDisplay>
        </div>
    );
}

function CarCard({car}) {
    return <div className="card col-md-2" style={{margin: 5}}>
        <img className="card-img-top" src="../images/car1.jpeg" alt="Car cap"></img>
        <div className="card-body" style={{paddingLeft: 0}}>
            <div className="card-title" style={{marginBottom: 0}}><b>Details</b></div>
            <CarMileage mileage={car.mileage} key="mileage"></CarMileage>
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

class CarDisplay extends React.Component {
    render() {
        var cars = this.props.cars;
        var x = this.props.x;
        var y = this.props.y;
        var carDisplay;
        var returnVal;

        for (let i = 0; i < y; i++) {
            for (let i2 = 0; i2 < x; i2++) {
                let index = i + i2;
                let car = cars[i + i2];

                if (car !== undefined) {
                    carDisplay = [carDisplay, <CarCard key={car.key} car={car}></CarCard>];
                }
            }
            returnVal = <div className="col-md-12 col-sm-12 col-xs-12"><div className="row"> {carDisplay} </div> </div>;
            carDisplay = [];
        }
        return returnVal;
    }
}

function NavHeader(props) {
    return <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
            <img
                alt=""
                src="images/logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Your website
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>;
}

export default App;
