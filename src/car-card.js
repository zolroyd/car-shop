import React from 'react';
function CarCard(props) {
    var color = (props.color !== undefined) ?
        <div className="card-text"><b>Color:</b> {props.color}</div>
        : <div className="card-text"><b>Color:</b> As Shown.</div>;
    var mileage = (props.mileage !== undefined) ?
        <div className="card-text"><b>Mileage:</b> 116,054</div>
        : <div className="card-text"><b>Mileage:</b> Not Listed</div>;

    var optionsList;
    var count = 0;
    for (var key in props.options) {
        count += 1;
        if (count <= 2) {
            var optionItem = <li><b>{key}:</b> {props.options[key]}</li>;
            optionsList = [optionsList, optionItem];
        }
    };
    optionsList = [optionsList, <div>...</div>];

    var options = '';
    options = (props.options !== undefined) ??
        <div className="card-text"><b>Options:</b>
            &emsp;
            <ul>
                {optionsList}
            </ul>
        </div>;

    if (props.carId !== undefined) {
        return <div className="card col-md-2" id={'car' + props.carId}>
            <img className="card-img-top" src="../images/car1.jpeg" alt="Car cap"></img>
            <div className="card-body" style={{paddingLeft: 0}}>
                <div className="card-title" style={{marginBottom: 0}}><b>Details</b></div>
                {mileage}
                {color}
                {options}
                <a href="#" className="col-md-12 btn btn-primary btn-lg text-center"
                   style={{marginLeft: 10}}>Details</a>
            </div>
        </div>;
    } else {
        return 'Failed to load content';
    }
}

export default CarCard;
