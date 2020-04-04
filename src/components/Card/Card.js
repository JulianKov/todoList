import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  cursor: pointer;
  position: relative;
  top: 0;
  left: 0;
  box-sizing:border-box;
  width: 30%;
  height: 100px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 4px 4px 6px 0px rgba(168,168,168,1);
  transition: top .1s;
  &:hover {
    top: 2px;
  }
`

const Card = () => {
  return(
    <Block>
      <h2>Card</h2>
    </Block>
  )
}

export default Card;