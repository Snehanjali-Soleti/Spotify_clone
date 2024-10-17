import React,{useState, useEffect, useContext} from "react";
import { makeAuthenticatedGETRequest, makeAuthenticatedPOSTRequest } from "../utils/serverHelper";
import SongContext from "../contexts/SongContext";

const AddToPlaylistModal = ({closeModal}) => {
    const [playlist, setPlaylist] = useState([]);
    const {currentSong} = useContext(SongContext);

    useEffect(() =>{
        const getData = async () =>{
            const response = await makeAuthenticatedGETRequest(
                '/playlist/get/me' 
            )
            setPlaylist(response.data);
            // console.log(playlist)
        }
        getData(); 
    }, [])

    const addSongToPlayList = async (playlistId) =>{
        const songId = currentSong._id;
        const payload = {playlistId, songId};
        console.log(payload)
        try{
                const response = await makeAuthenticatedPOSTRequest("/playlist/add/song",payload);
                console.log(response);
                if(response._id){
                    closeModal();
                }
            }
            catch (error) {
                console.error('Error adding song to playlist:', error);
            }
            }

    return (
        <div
            className="absolute z-50 bg-neutral-900 w-screen h-screen bg-opacity-60 flex justify-center items-center"
             onClick={closeModal}
        >
          <div className='w-[600px] h-[350px] rounded-lg bg-black  text-left p-5 ' onClick={(e)=>{e.stopPropagation()}}>
              <div className='text-white text-[1.2rem] mb-9 font-semibold '>Select PlayList</div>

              <div className="flex space-y-4 flex-col justify-center items-center">
                    {playlist.map((item)=>{
                        return (<PlaylistListComponet info={item} addSongToPlayList={addSongToPlayList}/>);
                    })}
              </div>

              
            </div>
        </div>
    );
};

const PlaylistListComponet = ({info, addSongToPlayList}) =>{
    return (
    <div className="bg-neutral-900 w-full flex items-center flex-row p-2 rounded-lg cursor-pointer" onClick={()=>{
        addSongToPlayList(info._id)
    }}>
        <div >
            <img src={info.thumbnail} className="object-cover w-16 h-16 rounded-lg" />
        </div>
        <div className="ml-4 text-white">{info.name}</div>
    </div>
    )
}

export default AddToPlaylistModal;
