import React from 'react';

function Header(props) {
    var head = <div className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">{props.ShopName}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>;

    head += </div>
    return head;
}

export default Header;
