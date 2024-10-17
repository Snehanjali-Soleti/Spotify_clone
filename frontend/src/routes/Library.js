import React, {useEffect, useState } from 'react'
import LoggedinContainer from './Container/LoggedinContainer';
import { makeAuthenticatedGETRequest } from '../utils/serverHelper';
import { Cards } from '../components/shared/Cards';

 const Library = () => {
    const [playlist, setPlaylist] = useState([]);

    useEffect(() =>{
        const getData = async () =>{
            const response = await makeAuthenticatedGETRequest(
                '/playlist/get/me' 
            )
            // console.log(response.data);
            setPlaylist(response.data);
        }
        getData(); 
    }, [])

  return (
    <LoggedinContainer currentActiveScreen = 'yourlibrary'>
         <div className=' px-7 text-white mt-2 h-[726px] rounded-lg rounded-b-lg bg-c3 pb-5  overflow-auto '>
         <div className=' text-[25px] text-left font-bold pt-9 pb-9 mt-10'>Your Library</div>
         <div className='flex flex-row pl-3 overflow-hidden'>
                {
                    playlist.length >0 ?
                        <>
                         {playlist.map((item) =>
                        <Cards key={JSON.stringify(item)} name={item.name} desc="" image={item.thumbnail} playlistId={item._id} />) }
                        </>:
                        <div className='text-[15px] flex items-center flex-row text-gray-400 '> 
                        No playists are created by you </div>
                  }
        </div>
         </div>
    </LoggedinContainer>
  )
}

export default Library;
