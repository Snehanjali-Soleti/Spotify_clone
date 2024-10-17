import React, {useState} from 'react'
import { Icon } from '@iconify/react';
import Textinput2 from '../components/shared/Textinput2';
import { Link } from 'react-router-dom';
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelper';


export const Signup2 = () => {
    const [username, setUsername] = useState("");
    const [firstname, setFistname] = useState("");
    const [lastname, setLastname] = useState("");
    

  return (
    <div className="w-full h-screen  flex flex-col items-center p-6 bg-black">
    <div className='w-full flex flex-col items-center text-white'>
    <Icon icon="logos:spotify-icon" width={40}/>
    <div className='mt-11 h-[2px] bg-white w-2/5'> 
        <div className='h-[2px] bg-[#1cd85e] w-1/2' ></div>
    </div>
    <div className='flex justify-start w-2/5 ml-11 mt-5 flex-row p-4 text-left'>
        <Link to='/signup'>
            <div className='py-2 pr-4 text-gray-500 cursor-pointer hover:text-white'>
                <Icon icon={"ep:arrow-left-bold"} color="currentColor" fontSize={25}/>
            </div>
        </Link>
         <div className='text-left'>
            <div className='text-sm text-gray-400 font-semibold'>
                Step 2 of 2:
            </div>
            <div className='text-lg text-white font-semibold'>
                Tell us about yourself
            </div>
         </div>
    </div>
        <div className='inputRegion w-[400px] pt-9 pb-9'>
            {/* input email and password */}
            <Textinput2 label="Userame" desc="This name will appear on your profile" value={username} setvalue={setUsername}/>
            <Textinput2 label="First Name" desc="" value={firstname} setvalue={setFistname}/>
            <Textinput2 label="Last Name" desc="" value={lastname} setvalue={setLastname}/>
            <button className='w-full p-3 bg-[#1cd85e] font-bold rounded-[50px] text-[1rem] text-black'> Sign Up</button>
        </div>
    </div>

</div>
  )
}
