import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// Import main Components
import Topnav from './Topnav.jsx';
import Midnav from './Midnav.jsx';
import Botnav from './Botnav.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    }

  }

  // Route to '/api/search/:query'


  render() {
    return (
      <div>
        {/* <img src="https://s3.us-east-2.amazonaws.com/nikedisplayimages/nikeairvapormax.jpg" /> */}
        <Topnav />
        <Midnav />
        <Botnav />
      </div >
    )
  }
}