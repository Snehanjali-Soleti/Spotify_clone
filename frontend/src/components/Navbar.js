import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='pr-2 fixed w-[76.3%] h-[60px] rounded-t-lg bg-neutral-900 flex flex-row items-center'>
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row mr-[750px]'>
                        <div className='text-gray-500 w-[28px] h-[28px] bg-black flex  items-center flex-col  pt-1 rounded-[50px] ml-5 mr-3'>
                            <Icon icon={"ep:arrow-left-bold"} color="currentColor" fontSize={20}/>
                        </div>
                        <div className='text-gray-500 w-[28px] h-[28px] bg-black flex items-center flex-col  pt-1 rounded-[50px]'>
                            <Icon icon={"ep:arrow-right-bold"} color="currentColor" fontSize={20}/>
                        </div>
                    </div>
                    <Link to='/signup'>
                        <div className={`ml-9 pl-4 text-gray-400 font-semibold text-sm hover:text-white pr-9`}> {/* hover written after text-white => overides the font color*/}
                            Sign Up
                        </div>
                    </Link>
                    
                    <Link to='/login'>
                        <div className='bg-white rounded-[50px] font-semibold px-4 py-2 w-[100px] h-[70%]  '>
                            Login
                        </div>
                    </Link>
                </div>
            </div>
  )
}
