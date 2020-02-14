import React from 'react';
import './App.css';
import styled from 'styled-components'
import Messenger from './Components/messenger';

const Container = styled.div`
  width:32%;
  background-color: #e5ddd5;
  min-height: 100vh;
  position:relative;
  left: 50%;
  transform: translate(-50%,0);
  border: solid 1px black;
`


function App() {
  return (
    <Container>      
        <Messenger></Messenger>


    </Container>
  );
}

export default App;
