import React from 'react';
import styled from 'styled-components';
import Cards from './components/Cards/Cards';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px;
  background-color: #5FD2B5;
`

function App() {
  return (
    <AppWrapper>
      <h1>app</h1>
      <Cards></Cards>
    </AppWrapper>
  );
}

export default App;
