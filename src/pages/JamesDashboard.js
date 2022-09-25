import React from 'react'
import styled from 'styled-components'


import UpcomingEvent from '../components/UpcomingEvent'
import Recent from '../components/Recent'
import Open from '../components/Open'


let hours = 0



let recentEvents = [
  {title : 'Sid 80s', location: 'Sid Commons', date: '28-Sep-2022'},
  {title : 'Lovett Public', location: 'Lovett Public', date: '30-Sep-2022'},
  {title : 'KITC', location: 'Baker', date: '28-Sep-2022'},
  {title : 'Sid Gardening', location: 'Sid Pavillion', date: '28-Sep-2022'}
]



const Dashboard = () => {
  return (
    <Container>
      <Status>
        <h1>
          Your 2022-2023 <br /> 
          Volunteer Hours: {hours}
        </h1>
      </Status>
      <Tables>
        <Table class = "Upcoming">
          <h2>Upcoming Activities:</h2>
          
          <UpcomingEvent />


        </Table>
        <Table class = "Recent">
          <h2>Recent Activities:</h2>
          <Recent />
        </Table>
        <Table class = "Open">
          <h2>Open Positions:</h2>
          <Open />
        </Table>
      </Tables>
    </Container>

  )
}

const Container = styled.div`
font-size: 22px;
height:100%;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
flex-direction:column;

`

const Status = styled.div`
margin-bottom:2%;
`

const Tables = styled.div`

width:100%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`
const Table = styled.div`
height:50%;
display:flex;
flex-direction:column;
align-items: flex-start;
gap: 10px;
`



export default Dashboard