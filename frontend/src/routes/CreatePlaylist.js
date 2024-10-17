import React, { useState } from 'react'
import LoggedinContainer from './Container/LoggedinContainer';
import Textinput from '../components/shared/Textinput';
import { Link } from 'react-router-dom';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelper';

const CreatePlaylist = () => {
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [playist, setPlaylist] = useState("");

  const createplaylist = async () =>{
    const body = {name, thumbnail, songs:[]};
    const response = await makeAuthenticatedPOSTRequest (
      '/playlist/create' , body
    );
  }

  return (
        <LoggedinContainer >
          <div className=' px-7 text-white mt-2 h-[726px] rounded-lg rounded-b-lg bg-c3 py-5  overflow-auto '>
            <div className='w-[600px] h-[350px] rounded-lg bg-black mt-[200px] ml-[260px] text-left p-5'>
              <div className='text-white text-[1.2rem] mb-9 font-semibold '>Create PlayList</div>
              <Textinput label='Name' placeholder='Playlist name' value={name} setvalue={setName} />
              <Textinput label='Thumbnail' placeholder='Thumnail' value={thumbnail} setvalue={setThumbnail} />
              <Link to='/home'>
                        <button className='bg-white text-black font-semibold py-2 px-4 rounded-[50px]' onClick={()=>{
                          createplaylist();
                        }}>
                            Create 
                        </button> 
              </Link>
            </div>
          </div>
        </LoggedinContainer>
  )
}

export default CreatePlaylist;