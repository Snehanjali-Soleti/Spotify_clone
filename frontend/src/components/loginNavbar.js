import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

 const LoginNavbar = ({currentActiveScreen}) => {
  return (
    <div className='pr-2 fixed z-30 w-[76.3%] h-[60px] rounded-t-lg bg-neutral-900 flex flex-row items-center cursor-pointer'>
                <div className='flex flex-row items-center justify-between'>
                    <div className='flex flex-row ml-[520px]'>
                        <div className='pt-4 flex flex-row'>
                            <Link to={'/premium'}>
                            <div className={` pl-4 text-white font-semibold text-sm hover:text-[#1cd85e] pr-9  ${ currentActiveScreen==='premium'? 'text-[#1cd85e]' : 'text-gray-400'} `}> {/* hover written after text-white => overides the font color*/}
                                Premium
                            </div>
                            </Link>
                            <Link to={'/install'}>
                            <div className={`text-white  hover:text-[#1cd85e] flex flex-row ${ currentActiveScreen==='install'? 'text-[#1cd85e]' : 'text-gray-400'} `}>
                                <div className=' flex  items-center flex-col  rounded-[50px] ml-5'>
                                    <Icon icon={"grommet-icons:download-option"} color="currentColor" fontSize={18} />
                                </div>
                                <div className={` pl-1 text-white font-semibold text-sm hover:text-[#1cd85e] pr-9`}> {/* hover written after text-white => overides the font color*/}
                                    Install App
                                </div>
                            </div>
                            </Link>
                            <Link to={'/uploadsong'}>
                            <div className={` pl-4 text-white font-semibold text-sm hover:text-[#1cd85e] pr-9 ${ currentActiveScreen==='uploadsong'? 'text-[#1cd85e]' : 'text-gray-400'} `}> {/* hover written after text-white => overides the font color*/}
                                Upload Song
                            </div>
                            </Link>
                        </div>
                        <div className='h-[30px] w-[2px] mt-2 bg-white '> </div>
                        <Link to={'/profile'}>
                        <div className={`text-white  hover:text-[#1cd85e] flex  flex-row ${ currentActiveScreen==='premium'? 'text-[#1cd85e]' : 'text-gray-400'} `}>
                            <div className=' flex  items-center flex-col  pt-1 rounded-[50px] ml-5'>
                                <Icon icon={"ion:person-circle-outline"} color="currentColor" fontSize={40} />
                            </div>
                            <div className={`pt-4 pl-4  font-semibold text-sm pr-1`}> {/* hover written after text-white => overides the font color*/}
                                Profile
                            </div>
                            <div className=' flex  items-center flex-col  pt-3 rounded-[50px] mr-3'>
                                <Icon icon={"iconamoon:arrow-down-2-duotone"} color="currentColor" fontSize={25}/>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
  )
}

export default LoginNavbar;