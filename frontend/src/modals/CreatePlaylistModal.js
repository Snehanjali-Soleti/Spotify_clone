import {useState} from "react";
import Textinput from '../components/shared/Textinput';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelper';

const CreatePlaylist = ({ setCreatePlaylistOpen}) => {

    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");

  
    const createplaylist = async () =>{
      const body = {name, thumbnail, songs:[]};
      const response = await makeAuthenticatedPOSTRequest (
        '/playlist/create' , body
      );
      setCreatePlaylistOpen(false);
    }

    return (
        <div
            className="absolute z-50 bg-neutral-900 w-screen h-screen bg-opacity-60 flex justify-center items-center"
            onClick={()=>{ setCreatePlaylistOpen(false)}}
        >
             <div className='w-[600px] h-[350px] rounded-lg bg-black  text-left p-5' onClick={(e)=>{e.stopPropagation()}}>
              <div className='text-white text-[1.2rem] mb-9 font-semibold '>Create PlayList</div>
              <Textinput label='Name' placeholder='Playlist name' value={name} setvalue={setName} />
              <Textinput label='Thumbnail' placeholder='Thumnail' value={thumbnail} setvalue={setThumbnail} />
              <button className='bg-white text-black font-semibold py-2 px-4 rounded-[50px]' onClick={()=>{createplaylist();}}>
                  Create 
              </button> 
            </div>
          
        </div>
    );
};

export default CreatePlaylist;