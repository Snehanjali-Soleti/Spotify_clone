import React, {useContext } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js'
import SongContext from '../contexts/SongContext';

const PlaySong = ({openModal}) => {
        const {currentSong, 
                soundPlayed,
                isPaused, setIsPaused} = useContext(SongContext);
                
        // console.log(currentSong);

            
              const playSound = () =>{
                if(!soundPlayed){
                  return;
                }
                soundPlayed.play();
              }
            
            
              const pauseSound = () =>{
                  soundPlayed.pause();
              }
            
              const togglePlayause = () =>{
                  if(isPaused){
                      playSound();
                      setIsPaused(false);
                  }else{
                      pauseSound();
                      setIsPaused(true);
                  }
              };

  return (
    <div className='pr-2 fixed z-40 w-full h-[80px] bottom-0 rounded-b-lg bg-neutral-900 flex flex-row items-center'>
    <div className='flex flex-row item-center'>
        <div className=' ml-5 flex w-[250px] flex-row items-center'>
            <div className='p-1'>
                    <img
                        src={currentSong.thumbnail}
                        alt="Uploaded"
                        className=" w-[60px] h-auto object-cover rounded-md"
                    />
            </div>
            <div className='text-white text-left pl-3 '>
                <div className='text-[15px] hover:underline'>{currentSong.name}</div>
                <div className='text-[12px] text-gray-400 hover:underline'>{currentSong.artist.username}</div>
            </div>
        </div>
        <div className=' ml-[180px] flex  flex-col'>
            <div className='flex flex-row ml-[200px] text-gray-400 cursor-pointer'>
                <div className=' rounded-[50px] ml-5 pt-2 hover:text-white '>
                        <Icon icon={"ion:shuffle"} color="currentColor" fontSize={23} />
                </div>
                <div className='   rounded-[50px] ml-5 pt-2 hover:text-white'>
                        <Icon icon={"carbon:skip-back-filled"} color="currentColor" fontSize={23} />
                </div>
                <div className='rounded-[50px] ml-5 hover:text-white'>
                        <div className=' pt-1' >
                                <Icon icon={isPaused ? "el:play-alt" : "zondicons:pause-solid" } color="currentColor" fontSize={32} onClick ={togglePlayause}/>  
                        </div> 
                </div>
                <div className='   rounded-[50px] ml-5 pt-2 hover:text-white' >
                        <Icon icon={"ri:skip-forward-fill"} color="currentColor" fontSize={23} />
                </div>
                <div className='   rounded-[50px] ml-5 pt-3 hover:text-white'>
                        <Icon icon={"simple-line-icons:loop"} color="currentColor" fontSize={18} />
                </div>
            </div>
            <div className='flex flex-row text-white  mt-[4px]'>
                <div className='text-[14px] '>
                        0:00
                </div>
                <div className='h-[3px] w-[550px] rounded-md bg-gray-400 mx-2 mt-[0.5rem]'>
                    
                </div>
                <div className='text-[14px] '>
                    3:24
                </div>
            </div>
        </div>

            <div className='flex flex-row ml-[250px] mt-[10px] cursor-pointer'>
                 <div className='   rounded-[50px] ml-5 pt-2 text-gray-400 hover:text-white' >
                        <Icon icon={"ic:twotone-playlist-add"} color="currentColor" fontSize={30} onClick={openModal}/>
                </div>
                <div className='   rounded-[50px] ml-5 pt-2 text-gray-400 hover:text-white'>
                        <Icon icon={"weui:like-outlined"} color="currentColor" fontSize={30} />
                </div>
            </div>

    </div>
    </div>
  )
}

export default PlaySong;
