import React, { useContext } from 'react';
import SongContext from '../../contexts/SongContext';

 const Singlesong = ({info}) => {
    const { currentSong, setCurrentSong}= useContext(SongContext);
    //console.log(currentSong);

  return (
   <div className='p-[0.4rem] hover:bg-neutral-900 mb-2 rounded-md flex flex-row cursor-pointer'
             onClick={()=>{
                setCurrentSong(info)
             }}>
        <div className='p-1 '>
                    <img
                        src={info.thumbnail}
                        alt="Uploaded"
                        className=" w-[46px] h-auto object-cover rounded-md"
                    />
        </div>
        <div className='flex flex-row justify-between w-full'>
            <div className='text-white text-left pl-3 pt-1 '>
                <div className='text-[16px] hover:underline'> {info.name}</div>
                <div className='text-[13px] text-gray-400 hover:underline'> {info.artist.firstname}</div>
            </div>
            <div className='text-gray-400 p-4 '>
                    3:44
            </div>
        </div>
   </div>
  )
}

export default Singlesong;