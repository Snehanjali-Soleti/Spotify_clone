import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { IconText } from './shared/IconText';
import spotifyLogo from '../assets/images/spotifyLogo.svg';

const LoginSidebar = ({currentActiveScreen,  setcreateplaylistopen }) => {
    // console.log(currentActiveScreen)
  return (
    <div>
            <div className='box1 bg-neutral-900 m-2 rounded-lg'>
                <img src={spotifyLogo} alt='spotify logo' width={110} className='pl-6 pt-5 pb-5' />
                <IconText 
                    iconName={"octicon:home-fill-24"}
                    displayText={"Home"} 
                    targetLink = '/home'
                    active = {currentActiveScreen === 'home'}
                /> 
                <IconText 
                    iconName={"majesticons:search-line"} 
                    displayText={"Search"} 
                    targetLink = '/search'
                    active = {currentActiveScreen === 'search'}
                /> 
            </div>

            <div className='box1 bg-neutral-900 m-2  rounded-lg pt-5 '>
                <div className='flex justify-between'>
                    <IconText
                        iconName={"clarity:library-solid"} 
                        displayText={"Your Library"} 
                        targetLink = '/myLibrary'
                        active = {currentActiveScreen === 'yourlibrary'}
                    />
                    <div className= {`pr-5 text-gray-400 hover:text-white cursor-pointer`}>
                        <Icon icon="lucide:plus" color='currentColor' fontSize={25} targetLink={'/addlibary'}/>
                    </div>
                </div>
                <IconText
                        iconName={"material-symbols-light:library-music"} 
                        displayText={"My Music"} 
                        targetLink={'/mymusic'}
                        active = {currentActiveScreen === 'mymusic'}
                />
                <IconText
                    iconName={"wpf:like"} 
                    displayText={"Liked Songs"} 
                    targetLink={'/likedsongs'}
                    active = {currentActiveScreen === 'likedsongs'}
                />
            </div>

            <div className='box1 bg-neutral-900 m-2 rounded-lg text-white py-5 text-sm text-left pl-6 h-[407px] flex flex-col justify-between'>
                <div>
                    <div className='font-semibold pb-2'>
                    Create your own first playlist
                    </div>
                    <div className='text-[13px] pb-5'>
                        It's easy we will help you
                    </div>
                        <button className='bg-white text-black font-semibold py-2 px-4 rounded-[50px]' onClick={()=>{setcreateplaylistopen(true) }}>
                            Create playlist
                        </button>  
                </div>
            </div>
    </div>
  )
}

export default LoginSidebar;
