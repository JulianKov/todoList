import styled from "styled-components";

export const Block = styled.div`
  cursor: ${props => props.collapsed ? 'pointer' : 'auto'};
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
  transition: box-shadow .3s, height .3s ease-out;
  z-index: 3;
  &:hover {
    box-shadow: 4px 4px 6px 0px rgb(255,91,158);
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${props => props.margin20 ? '20px' : '10px'} 0;
`;

export const ButtonTitle = styled.p`
  margin: 0;
  font-size: 20px;
`;

export const CloseBtn = styled.button`
  cursor: pointer;
  position: relative;
  width: 23px;
  height: 23px;
  margin-top: 3px;
  background-color: #E6399B;
  border: 2px solid #FFFFFF;
  border-radius: 50%;
  &:hover {
    opacity: .7;
  }
  &::before, &::after {
    position: absolute;
    left: 8px;
    top: 4px;
    content: ' ';
    height: 12px;
    width: 2px;
    background-color: #FFFFFF;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

export const Input = styled.input`
  margin: 10px 0;
  box-sizing: border-box;
  padding: 4px;
  width: 100%;
  border: 1px solid #FFFFFF;
  border-radius: 4px;
  background-color: transparent;
  color: #FFFFFF;
  font-size: 16px;
  &:focus {
    background-color: rgba(255,255,255,0.18);
    outline: none;
  }
`;

export const Form = styled.div`
	visibility: hidden;	
  opacity: 0;
  transition: opacity 0s;
  &.active {
  	visibility: visible;
    opacity: 1;
    transition: opacity 1s .2s;
  }
`;

export const ControlBtn = styled.button`
  cursor: ${props => props.empty ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.empty ? '.6' : '1'};
  border: 1px solid #FFFFFF;
  background-color: ${props => props.danger ? '#FF0000' : '#48DD00'};
  border-radius: 5px;
  padding: 6px;
  color: #FFFFFF;
`;
