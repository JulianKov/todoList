import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

import { TextField } from '@material-ui/core';

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  line-height: 50px;
`

const StyledBtn = styled.button`
  cursor: pointer;
  width: 25px;
  height: 25px;
  padding: 0;
  border: none;
  border-radius: 50%;
`

const StyledField = styled(TextField)`
  & label {
    color: #ffffff;
  }
  & label:focused {
    color: #ffffff;
  }
  & div::after {
    border-color: #ffffff;
  }
  & div::before {
    border-color: #ffffff;
  }
`
 

const AddCard = ({form, action}) => {

  const closeBtn = (
    <StyledBtn onClick={action}>
      <CloseIcon style={{ color: "#FF8E53" }}/>
    </StyledBtn>
  );

  const formBody = (
    <div>
      <hr style={{border: '1px solid #ffffff'}}/>
      <StyledField fullWidth id="standard-basic" label="What shall we call the board?"/>
    </div>
  )

  return(
    <React.Fragment>
      <Title>
        <span>
          {form==="closed" ? 'Create a new board...' : 'Creating a board'}
        </span>
        {form==="opened" ? closeBtn : null}
      </Title>
      
      {form==="opened" ? formBody : null}
    </React.Fragment>
  )
}

export default AddCard;