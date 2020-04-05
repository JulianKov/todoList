import React from 'react';
import Card from '../Card/Card';
import AddButton from '../AddButton/AddButton';
import styled from 'styled-components';
import {connect} from "react-redux";

const CardsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Empty = styled.div`
  width: 30%;
  height: 0;
`;

const Cards = (props) => {
  return(
    <CardsWrapper>
      <AddButton />
      <Empty />
      {props.cards.map((card) => (
        <Card name={card}/>
      ))}
    </CardsWrapper>
  )
};

function mapStateToProps(state) {
  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps)(Cards);
