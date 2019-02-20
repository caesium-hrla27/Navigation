import React from 'react';
import styled from 'styled-components';
import { MensDropdown, WomensDropdown, KidsDropdown, NikeByYouDropdown } from './MidNavDrop.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  height: 72px;
  align-items: center;
`;

const Categories = styled.div`
  display: flex;
  flex-direction: row;
`;

const Category = styled.div`
  padding: 10px;
  &:hover {
    border-bottom: 3px solid black;
  }
`;

const Mens = styled.div`
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    border-bottom: 3px solid black;
  }
`;

const Womens = styled.div`
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    border-bottom: 3px solid black;
  }
`;

const Kids = styled.div`
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    border-bottom: 3px solid black;
  }
`;

const NikeByYou = styled.div`
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    border-bottom: 3px solid black;
  }
`;


class Midnav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mens: false,
      womens: false,
      kids: false,
      nby: false
    }
    this.handleMensDropdown = this.handleMensDropdown.bind(this);
    this.handleWomensDropdown = this.handleWomensDropdown.bind(this);
    this.handleKidsDropdown = this.handleKidsDropdown.bind(this);
    this.handleNBYDropdown = this.handleNBYDropdown.bind(this);
  }

  handleMensDropdown() {
    this.setState({
      mens: !this.state.mens
    })
  }
  handleWomensDropdown() {
    this.setState({
      womens: !this.state.womens
    })
  }
  handleKidsDropdown() {
    this.setState({
      kids: !this.state.kids
    })
  }
  handleNBYDropdown() {
    this.setState({
      nby: !this.state.nby
    })
  }

  render() {
    return (
      <div>
        <Container>
          <div>Nike Logo</div>
          <Categories>
            <Mens onMouseOver={this.handleMensDropdown} onMouseLeave={this.handleMensDropdown}>MEN</Mens>
            <Womens onMouseOver={this.handleWomensDropdown} onMouseLeave={this.handleWomensDropdown}>WOMEN</Womens>
            <Kids onMouseOver={this.handleKidsDropdown} onMouseLeave={this.handleKidsDropdown}>KIDS</Kids>
            <NikeByYou onMouseOver={this.handleNBYDropdown} onMouseLeave={this.handleNBYDropdown}>NIKE BY YOU</NikeByYou>
          </Categories>
          <div>
            <input placeholder="Search" />
          </div>
        </Container>
        {this.state.mens ? <MensDropdown /> : <div></div>}
        {this.state.womens ? <WomensDropdown /> : <div></div>}
        {this.state.kids ? <KidsDropdown /> : <div></div>}
        {this.state.nby ? <NikeByYouDropdown /> : <div></div>}
      </div>
    )
  }
}

export default Midnav;