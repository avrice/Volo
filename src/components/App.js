import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'


import Calendar from '../pages/Calendar.js'
import Coordinate from '../pages/Coordinate.js'
import Dashboard from '../pages/JamesDashboard.js'
import Home from '../pages/Home.js'
import Leaderboard from '../pages/Calendar.js'

import bgImg from '../assets/bg-home.png'

import { Route, Routes} from "react-router-dom"




const App = () => {
  
  return (
    <>
      <Container>
        <Wrapper>
          <Navbar />
            <Routes>
              <Route path = "/" element = {<Home />} />
              <Route path = "/calendar" element = {<Calendar />} />
              <Route path = "/dashboard" element = {<Dashboard />} />
              <Route path = "/leaderboard" element = {<Leaderboard />} />
              <Route path = "/coordinate" element = {<Coordinate />} />
            </Routes>
        </Wrapper>
      </Container>
    </>
  )
}

const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position:center;
  background-size:cover;
  background-repeat: no-repeat;
  width: 102%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  width: 100vw;
  justify-content: flex-start;
  

`

const Container = styled.div`
  background: #FFFFFF;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  
`;




export default App