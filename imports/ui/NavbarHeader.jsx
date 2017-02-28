import React, { Component } from 'react';
import Welcome from '../ui/pages/welcome.jsx';
import { FlowRouter } from 'meteor/kadira:flow-router';

export class NavbarHeader extends Component {


  handleButtonPress(event) {
    FlowRouter.go('/')
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">
                <img className="img-responsive" alt="Slidd.it" src="logo3.png" />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="#" onClick={this.handleButtonPress.bind(this)}>Home</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Active lectures <span className="caret"></span></a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                      <li><a href="#">Action</a></li>
                    </ul>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
