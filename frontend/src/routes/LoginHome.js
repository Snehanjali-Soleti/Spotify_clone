import React from 'react'
import LoggedinContainer from './Container/LoggedinContainer'
import  RightSide  from '../components/RightSide';


 const LoginHome = () => {
  return (
   <LoggedinContainer currentActiveScreen='home'>
        <RightSide/>
   </LoggedinContainer>
  )
}

export default LoginHome;
