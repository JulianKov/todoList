import React, {useRef, useState} from 'react';
import { connect } from "react-redux";
import { Block, Row, ButtonTitle, CloseBtn, Input, Form, ControlBtn } from './styled';


const AddButton = (props) => {
  const [collapsed, rollUp] = useState(true);
  const [newCardName, setCardName] = useState('');
  const formRef = useRef(null);
  const inputRef = useRef('');

  const rollOut = () => {
    if(!collapsed) {
      formRef.current.classList.remove('active');
      rollUp(!collapsed)
    }
  };

  const rollIn = () => {
    if(collapsed) {
      formRef.current.classList.add('active');
      rollUp(!collapsed)
    }
  };

  const setName = () => {
    setCardName(inputRef.current.value);
  };

  const addCard = () => {
    if (newCardName.length !== 0) {
      props.onAdd(newCardName);
      setCardName('');
      rollOut();
    }
  };

  return(
    <Block collapsed={collapsed} onClick={rollIn}>
      <Row margin20>
        <ButtonTitle>{collapsed ? 'Create a new Board...' : 'Creating a Board'}</ButtonTitle>
        {collapsed ? null : (<CloseBtn onClick={rollOut}/>)}
      </Row>
      <Form ref={formRef} >
        <label htmlFor="inp">What shell we call the board?</label>
        <Input ref={inputRef} value={newCardName} type="text" id="inp" onChange={setName}/>
        <Row>
          <ControlBtn danger onClick={rollOut}>Cancel</ControlBtn>
          <ControlBtn
            empty={newCardName.length === 0}
            onClick={addCard}
          >Create</ControlBtn>
        </Row>
      </Form>
    </Block>
  )
};

function mapDispatchToProps(dispatch) {
  return {
    onAdd: (name) => dispatch({type: 'ADD_CARD', payload: name})
  }
}

export default connect(null, mapDispatchToProps)(AddButton);
