import React from 'react'
import styled from 'styled-components'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const navbar = () => {
  return (
    <Container>
        <Link to="/" className="home">
          Rice Volunteering
        </Link>
        <ul>
          <CustomLink to="/coordinate">Coordinate</CustomLink>
          <CustomLink to="/leaderboard">Leaderboard</CustomLink>
          <CustomLink to="/tracker">Tracker</CustomLink>
          <CustomLink to="/dashboard">Dashboard</CustomLink>
        </ul>
    </Container>
  )
}

function CustomLink({to, children, ...props}) {
  const path = window.location.pathname
  // const resolvedPath = useResolvedPath(to)
  // const isActive = useMatch({ path: resolvedPath.pathname, end:true})

  return (
    <li className={path === to}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
  
}
const Container = styled.div`
  display:flex;
  flex-basis:100;
  color:white;
  height: 100px;
  justify-content: space-between;
  align-items: stretch;
  gap: 5=rem;
  padding: 0 1rem;
  
  a {
    color: white;
    text-decoration: none;
    height: 60%;
    display: flex;
    align-items: center;
    padding: .25rem;
  }

  ul {
    padding:0;
    margin: 0;
    list-style: none;
    display:flex;
    gap_ 1rem;

  }


`



export default navbar