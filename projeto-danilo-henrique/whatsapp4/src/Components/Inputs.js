import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
display: flex;
height: 5vh;
box-sizing: border-box;
padding: 1%;
align-items: center;
justify-content: space-between;
`
const InputName = styled.input`
  border: none;
  height:100%;
  border-radius: 3px;
  font-size:16px;
  padding-left:8px;
  width:90px;
`
const InputMessage = styled.input`
  border: none;
  height:100%;
  border-radius: 3px;
  font-size:16px;
  padding-left:8px;
  width:60%;
  min-width:90px;
  flex-grow:1;
  margin: 0 10px;
`
const BtnEnviar = styled.button`
  font-weight: bold;
  font-size: 16px;
  background-color: #f0f0f0;
  border: none;
  height:100%;
  border-radius: 3px;
`
class Inputs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      autor: "",
      mensagem: ""
    }
  }

  render() {
    return (
      <Container>
        <InputName
          type="text"
          placeholder="Usuário"
          value={this.state.autor}></InputName>
        <InputMessage
          type="text"
          placeholder="Mensagem"
          value={this.state.mensagem}>
        </InputMessage>
        <BtnEnviar>Enviar</BtnEnviar>
      </Container>
    )
  }
}

export default Inputs