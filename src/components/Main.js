import React from 'react'
import styled from 'styled-components'
import vectorImg from '../assets/vector.svg'

const Main = () => {
  return (
    <IntroTwo>
      <Container>
        <VectorWrapper>
          <img src={vectorImg} alt = ""></img>
        </VectorWrapper>
      </Container>
    </IntroTwo>

  )
}

const Container = styled.div`
  height: 100%;
  min-width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15%;

  img {
    width:130%;
  }
`
const IntroTwo = styled.div`
  min-width: 40%;
  position: relative;
  left: -16%;
  
`

const VectorWrapper = styled.div`

`

export default Main