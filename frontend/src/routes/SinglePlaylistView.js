import React, { useEffect, useState } from 'react'
import LoggedinContainer from './Container/LoggedinContainer'
import { useParams } from 'react-router-dom'
import { makeAuthenticatedGETRequest } from '../utils/serverHelper';
import Singlesong from '../components/shared/Singlesong';

const SinglePlaylistView = () => {
    const [playlistDetails, setPlaylistDetails] = useState({});
    const {playlistId} = useParams();
    console.log(playlistId)

    useEffect(()=>{
        const getData = async () =>{
            const response = await makeAuthenticatedGETRequest('/playlist/get/playlist/'+ playlistId );
            console.log(response);
            setPlaylistDetails(response);
            console.log(playlistDetails);
        };
        getData();
    },[])

    console.log(playlistDetails);

  return (
    <LoggedinContainer currentActiveScreen='yourlibrary'>
         <div className=' px-7 text-white mt-2 h-[726px] rounded-lg rounded-b-lg bg-c3 py-5  overflow-auto '>
            <div className=' text-[25px] text-left font-bold pt-9 pb-9 mt-10'>{playlistDetails.name}</div>
             {playlistDetails._id ?
            <>
                { playlistDetails.songs.map((item) => {
                      return <Singlesong info={item} playSound={()=>{}} key={JSON.stringify(item)} />
                    })
                }
            </> : <div className='text-[15px] flex items-center flex-row text-gray-400 '> no songs in the playist </div>
            } 
        </div>
    </LoggedinContainer>
  )
}

export default SinglePlaylistView