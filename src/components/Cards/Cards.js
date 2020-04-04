import React from 'react';
import Card from '../Card/Card';
import AddButton from '../AddButton/AddButton';
import styled from 'styled-components';

const CardsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Empty = styled.div`
  width: 30%;
  height: 0;
`

const Cards = () => {
  return(
    <CardsWrapper>
      <AddButton />
      <Empty />
      {[1,2,3,4,5,6,7,8,9,10].map((num) => (
        <Card></Card>
      ))}
    </CardsWrapper>
  )
}

export default Cards;