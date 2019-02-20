import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  height: 41px;
`;
const Brands = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
  width: 160px;
`;
const Customer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BrandItem = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  border-right: 1px solid grey;
  height: 50px;
  display: flex;
  align-items: center;
`;

const BrandImage = styled.img`
  height: 20px;
`;

class Topnav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nikeplus: 'https://s3.us-east-2.amazonaws.com/nikedisplayimages/navbar/nikeplus-disabled-logo.png',
      jordan: 'https://s3.us-east-2.amazonaws.com/nikedisplayimages/navbar/jordan-disabled-logo.png',
      hurley: 'https://s3.us-east-2.amazonaws.com/nikedisplayimages/navbar/hurley-disabled-logo.png',
      converse: 'https://s3.us-east-2.amazonaws.com/nikedisplayimages/navbar/converse-disabled-logo.png'
    }
    this.handleConverse = this.handleConverse.bind(this);
    this.handleHurley = this.handleHurley.bind(this);
    this.handleJordan = this.handleJordan.bind(this);
    this.handleNikePlus = this.handleNikePlus.bind(this);
  }

  // Toggles nike plus
  handleNikePlus() {
    let on = 'https://s3.us-east-2.amazonaws.com/nikedisplayimages/navbar/nikeplus-enabled-logo.png';
    let off = 'https://s3.us-east-2.amazonaws.com/nikedisplayimages/navbar/nikeplus-disabled-logo.png';

    this.state.nikeplus === off ? this.setState({ nikeplus: on }) : this.setState({ nikeplus: off });

  }

  // Toggles jordan
  handleJordan() {
    let on = 'https://s3.us-east-2.amazonaws.com/nikedisplayimages/navbar/jordan-enabled-logo.png';
    let off = 'https://s3.us-east-2.amazonaws.com/nikedisplayimages/navbar/jordan-disabled-logo.png';

    this.state.jordan === off ? this.setState({ jordan: on }) : this.setState({ jordan: off });
  }

  // Toggles Hurley
  handleHurley() {
    let on = 'https://s3.us-east-2.amazonaws.com/nikedisplayimages/navbar/hurley-enabled-logo.png';
    let off = 'https://s3.us-east-2.amazonaws.com/nikedisplayimages/navbar/hurley-disabled-logo.png';

    this.state.hurley === off ? this.setState({ hurley: on }) : this.setState({ hurley: off });

  }

  // Toggles Converse
  handleConverse() {
    let on = 'https://s3.us-east-2.amazonaws.com/nikedisplayimages/navbar/converse-enabled-logo.png';
    let off = 'https://s3.us-east-2.amazonaws.com/nikedisplayimages/navbar/converse-disabled-logo.png';

    this.state.converse === off ? this.setState({ converse: on }) : this.setState({ converse: off });
  }

  render() {

    return (
      <div>
        <Container>
          <Brands>
            <BrandItem onMouseOver={this.handleNikePlus} onMouseLeave={this.handleNikePlus}> <BrandImage src={this.state.nikeplus} /></BrandItem>
            <BrandItem onMouseOver={this.handleJordan} onMouseLeave={this.handleJordan}> <BrandImage src={this.state.jordan} /> </BrandItem>
            <BrandItem onMouseOver={this.handleHurley} onMouseLeave={this.handleHurley}> <BrandImage src={this.state.hurley} /> </BrandItem>
            <BrandItem onMouseOver={this.handleConverse} onMouseLeave={this.handleConverse}> <BrandImage src={this.state.converse} /> </BrandItem>
          </Brands>
          <Customer>
            <div> Join / Login to NikePlus Account </div>
            <div> Help</div>
            <div> Cart</div>
            <div> Language </div>
          </Customer>
        </Container>
      </div>
    )
  }
}

export default Topnav;