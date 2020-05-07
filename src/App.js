import React, {Component} from 'react';
import './App.css';
import XrayModal from "./Components/XrayComponent";
import Navbar from './Components/NavbarComponent'
import Router from "./Components/Router";

require('typeface-roboto')

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      address:0,
      XrayModal:false
    }
    this.handleNav = this.handleNav.bind(this);
    this.toggleXrayModal = this.toggleXrayModal.bind(this);
  }
  handleNav(address){
    this.setState({address: address})
      
  }
  toggleXrayModal(){
    this.setState({XrayModal: !this.state.XrayModal})
  }

  render(){
    console.log("address: ", this.state.address);
    document.body.style = 'background: #171717 ;';
    return (
      <div className="App">
        <div>
          <Navbar toggleModal={this.toggleXrayModal} navigate={this.handleNav}/>
        </div>
        <Router route={this.state.address}/>
        <XrayModal route={this.state.XrayModal} toggleModal={this.toggleXrayModal}/>
      </div>
    );
  }
}
