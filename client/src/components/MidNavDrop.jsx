import React from 'react';
import styled from 'styled-components';

const MensDropdownContainer = styled.div`
display: flex;
height: 460px;
background-color: red;
justify-content: space-evenly;
align-items: flex-start;
`;

const WomensDropdownContainer = styled.div`
  height: 515px;
  background-color: orange;
`;

const KidsDropdownContainer = styled.div`
  height: 563px;
  background-color: yellow;
`;

const NikeByYouDropdownContainer = styled.div`
  height: 304px;
  background-color: blue;
`;

// DropDown Component for mens on hover
function MensDropdown(props) {
  return (
    <div>
      <MensDropdownContainer>
        <div>
          <div>NEW RELEASES</div>
          <div>BEST SELLERS</div>
          <div>CAMO</div>
          <div>COLD WEATHER</div>
          <div>MEMBER EXCLUSIVES</div>
          <div>GENDER NEUTRAL</div>
          <div>SALE</div>
        </div>
        <div>
          <div>SHOES</div>
          <div>SNKRS Launch Calendar</div>
          <div>Lifestyle</div>
          <div>Running</div>
          <div>Training & Gym</div>
          <div>Basketball</div>
          <div>Jordan</div>
          <div>Football</div>
          <div>Soccer</div>
          <div>Baseball</div>
          <div>Golf</div>
          <div>Skateboarding</div>
          <div>Tennis</div>
          <div>Boots</div>
          <div>All Shoes</div>
        </div>
        <div>
          <div>CLOTHING</div>
          <div>Tops & T - Shirts</div>
          <div>Shorts</div>
          <div>Polos</div>
          <div>Hoodies & Sweatshirts</div>
          <div>Jackets & Vests</div>
          <div>Pants & Tights</div>
          <div>Surf & Swimwear</div>
          <div>Nike Pro & Compression</div>
          <div>Socks & Underwear</div>
          <div>Big & Tall</div>
          <div>All Clothing</div>
          <div>ACCESSORIES & EQUIPMENT</div>
          <div>Bags & Backpacks</div>
          <div>Apple Watch Nike +</div>
        </div>
        <div>
          <div>SHOP COLLECTION</div>
          <div>Golf</div>
          <div>Jordan</div>
          <div>Soccer</div>
          <div>Running</div>
          <div>Basketball</div>
          <div>NikeLab</div>
          <div>Training & Gym</div>
          <div>Yoga</div>
          <div>Football</div>
          <div>Baseball</div>
          <div>Tennis</div>
          <div>Nike Sportswear</div>
          <div>ACG</div>
          <div>Skateboarding</div>
          <div>Fan Gear</div>
        </div>
      </MensDropdownContainer>
    </div>
  );
}

// DropDown Component for mens on hover
function WomensDropdown(props) {
  return (
    <div>
      <WomensDropdownContainer />
    </div>
  );
}
// DropDown Component for mens on hover
function KidsDropdown(props) {
  return (
    <div>
      <KidsDropdownContainer />
    </div>
  );
}
// DropDown Component for mens on hover
function NikeByYouDropdown(props) {
  return (
    <div>
      <NikeByYouDropdownContainer />
    </div>
  );
}

module.exports = {
  MensDropdown,
  WomensDropdown,
  KidsDropdown,
  NikeByYouDropdown
}