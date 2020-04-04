import React, { useState } from 'react';
import styled from 'styled-components';

const Block = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing:border-box;
  width: 30%;
  height: ${props => props.collapsed ? '100px' : '200px'};
  margin-bottom: 20px;
  padding: 10px;
  background: linear-gradient(45deg, #FFAA00 0%, #E6399B 70%);
  border-radius: 5px;
  box-shadow: 4px 4px 6px 0px rgba(168,168,168,1);
  color: #FFFFFF;
  transition: top .1s;
  z-index: 3;
  &:hover {
    top: 2px;
  }
`


const AddButton = () => {
  const [collapsed, rollUp] = useState(true);

  return(
    <Block collapsed={collapsed} onClick={() => {rollUp(!collapsed)}}>
      <h2>Add new Card...</h2>
    </Block>
  )
}

export default AddButton;