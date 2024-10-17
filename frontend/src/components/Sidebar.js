import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { IconText } from './shared/IconText';
import spotifyLogo from '../assets/images/spotifyLogo.svg';

export const Sidebar = () => {
  return (
    <>
        <div className='box1 bg-neutral-900 m-2 rounded-lg'>
                <img src={spotifyLogo} alt='spotify logo' width={110} className='pl-6 pt-5 pb-5' />
                <span  onClick={()=>{ alert('login/signup to view songs')}}>
                <IconText  
                    iconName={"octicon:home-fill-24"}
                    active
                    displayText={"Home"} 
                    onClick={()=>alert('login/signup to view songs')}
                />
                </span> 
                <span  onClick={()=>{ alert('login/signup to browse songs')}}>
                <IconText 
                    iconName={"majesticons:search-line"} 
                    displayText={"Search"} 
                /> 
                </span>
            </div>
            <div className='box1 bg-neutral-900 m-2  rounded-lg pt-5 '>
                <div className='flex justify-between'>
                
                <span  onClick={()=>{ alert('login/signup to view songs')}}>
                    <IconText
                        iconName={"clarity:library-solid"} 
                        displayText={"Your Library"} 
                    />
                    </span> 
                    <span  onClick={()=>{ alert('login/signup to browse songs')}}>
                    <div className= {`pr-5 text-gray-400 hover:text-white cursor-pointer`}>
                        <Icon icon="lucide:plus" color='currentColor' fontSize={25} />
                    </div>
                    </span>
                </div>
                
                <span  onClick={()=>{ alert('login/signup to view songs')}}>
                <IconText
                    iconName={"wpf:like"} 
                    displayText={"Liked Songs"} 
                />
                 </span>
            </div>
            
            <div className='box1 bg-neutral-900 m-2 rounded-lg text-white py-5 text-sm text-left pl-6 h-[60vh] flex flex-col justify-between'>
                <div>
                    <div className='font-semibold pb-2'>
                    Create your own first playlist
                    </div>
                    <div className='text-[13px] pb-5'>
                        It's easy we will help you
                    </div>
                     
                <span  onClick={()=>{ alert('login/signup to create songs')}}>
                    <button className='bg-white text-black font-semibold py-2 px-4 rounded-[50px]'>
                        Create playlist
                    </button>
                    </span>
                </div>
                <div className='flex items-center  py-2 pl-4 border border-gray-400 w-2/5 rounded-[50px] '>
                    <div className='text-white'>
                        <Icon icon={"ooui:globe"}
                        color='currentColor' fontSize={21} />
                    </div>
                    <div className='pl-2 pr-2 font-semibold text-[14px] text-white'> 
                        {"English"}
                    </div>
                </div>
            </div>
    </>
  )
}
