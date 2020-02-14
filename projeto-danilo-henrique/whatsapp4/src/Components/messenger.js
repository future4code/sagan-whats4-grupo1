import React from 'react'
import PropTypes from "prop-types";
import styled from "styled-components";

const ContainerMessenger = styled.div`
    display: flex;
    flex-direction: column;    
    background: white;    
    box-sizing: border-box;
    margin-bottom: 2%;
    margin-left: 2%;
    margin-right: 2%;
    padding: 2%;
    box-sizing: border-box;
    border-radius:5px;
`


const UserName = styled.span`
    font-weight: bold;
    
`
const UserMessenger = styled.span`
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