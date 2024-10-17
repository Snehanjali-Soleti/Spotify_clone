import React from 'react';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import  RightSide  from '../components/RightSide';

const Home = () => {
    	// const [cookie, setCookie] = useCookies(["token"]);

  return (
    <div className='h-screen w-full flex  bg-black overflow-hidden'>
        {/* left pannel */}
        <div className='h-full w-[23%]'>
         < Sidebar/> 
        </div>

        {/* right pannel */}
        <div className='h-screen w-[76.3%] overflow-x-hidden mt-2 rounded-lg'>       
             < Navbar/> 
            < RightSide />
        </div>
    </div>
  )
}

export default Home;
