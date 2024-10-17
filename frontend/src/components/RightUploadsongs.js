import React,{useState} from 'react';
import Textinput from './shared/Textinput';
import CloudinaryUpload from './shared/CloudinaryUpload';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelper';
import { useNavigate } from 'react-router-dom';
import  LoggedinContainer  from '../routes/Container/LoggedinContainer';

 const RightUploadsongs = () => {
    const [name, setName] = useState("");
    const [thumbnail, setThumbail] = useState("");
    const [playlistUrl, setPlaylistUrl] = useState("empty");
    const [uploadedSongName, setUploadedSongFileName] = useState("");
    const navigateTo = useNavigate();

    const submitSong = async () => {
        const data = {name, thumbnail, track:playlistUrl};
        const response = await makeAuthenticatedPOSTRequest(
            '/song/create',
            data
        );
        if(response.err){
            alert('Cloud not create song');
            return;
        }
        navigateTo('/home');
    }
    
  return (
    <LoggedinContainer currentActiveScreen={'uploadsong'}>
        <div className=' px-7 text-white mt-2 h-[726px] rounded-lg rounded-b-lg bg-c3 py-5  overflow-auto '>
            <div className=' text-[25px] text-left font-bold pt-9 pb-16 mt-10'>Upload Your Music</div>
            <Textinput label='Name' placeholder='Name' value={name} setvalue={setName} />
            <Textinput label='Thumbnail' placeholder='Thumbnail' value={thumbnail} setvalue={setThumbail} />
            <div className='w-[150px] text-left flex flex-col '>
                { uploadedSongName ?
                <div className='bg-white w-[300px] text-black rounded-full px-4 py-2 font-semibold overflow-hidden text-ellipsis whitespace-nowrap '>{uploadedSongName}</div>:
                <CloudinaryUpload setUrl={setPlaylistUrl} setName={setUploadedSongFileName} />}
                <button
                    className="bg-white text-black rounded-full px-4 py-2 mt-4 hover:bg-[#1cd85e] font-semibold"
                    onClick={(e)=>{
                        e.preventDefault();
                        submitSong();
                    }}>
                        Submit
                </button>
            </div>
        </div>
    </LoggedinContainer>
  )
}

export default RightUploadsongs;
