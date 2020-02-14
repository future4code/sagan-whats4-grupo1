import React from 'react'
import PropTypes from "prop-types";
import styled from "styled-components";

const ContainerMessenger = styled.div`
    display: flex;
    padding: 5px;
    background: white;
    min-height: 95vh;   
    box-sizing: border-box 
`

const UserName = styled.p`
    color: red;
    font-weight: 500;
    
`
const UserMessenger = styled.p`
    color: blue;
`


class Messenger extends React.Component {
  constructor(props) {
    super(props)
  }



  render() {
    return (
      <ContainerMessenger>
        <UserName> {this.props.userName} </UserName>
        <UserMessenger> {this.props.userMessenger} </UserMessenger>
      </ContainerMessenger>

    )
  }
}

export default Messenger