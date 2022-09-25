import React from 'react'
import styled from 'styled-components'

const sidebar = () => {
  return (
    <Intro>
      <Container>
        <h1>
            Rice Volunteering <br />
        Tracker
        </h1> 
        <h2> A Rice-dedicated site to <br />
        standardizing volunteer hour <br />
        tracking</h2>
      </Container>
    </Intro>
  )
}

const Container = styled.div`
  height: 100%;
  min-width: 40%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align:left;
  margin-right: -18%;

  h1 {
    font-size:54px;
    font-weight:700;
    color: 000000;
    
  }

  h2 {
    color:#7C7C7C;
  }
`
const Intro = styled.div`
  height: 100%;
  min-width: 45%;
  position: relative;
`

export default sidebar