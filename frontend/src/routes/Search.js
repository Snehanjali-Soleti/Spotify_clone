import React, { useState } from 'react'
import LoggedinContainer from './Container/LoggedinContainer';
import { Icon } from '@iconify/react/dist/iconify.js';
import { makeAuthenticatedGETRequest } from '../utils/serverHelper';
import  Singlesong  from '../components/shared/Singlesong';

 const Search = () => {
    const [searchtext, setSearchtext] = useState("");
    const [isInputFocused, setIsInputFocus] = useState(false);
    const [songData, setSongData] = useState([]);

    const searchSong = async () => {
        const response = await makeAuthenticatedGETRequest(
            '/song/get/songname/' + searchtext,

        );
        // console.log(response.data);
        setSongData(response.data);
    }
    
  return (
    <LoggedinContainer currentActiveScreen={'search'}>
        <div className=' mt-[70px] mb-1 '>
            <div className={`text-white flex items-center p-3   bg-neutral-900 rounded-[50px] w-1/2 ${isInputFocused?"border border-white":"border border-neutral-800"}`} > 
                <Icon icon={'majesticons:search-line'} color='white' fontSize={25} />
                <input className=' text-sm pl-2 bg-neutral-900 w-full focus:outline-none' 
                    type='text'
                    placeholder=' What do you want to play?'
                    value={searchtext}
                    onChange={(e)=>{
                        setSearchtext(e.target.value)
                    }}
                    onFocus={()=>{
                        setIsInputFocus(true)
                    }}
                    onBlur={()=>{
                        setIsInputFocus(false)
                    }}
                    onKeyDown={(e)=>{
                        if(e.key === 'Enter')
                            searchSong();
                    }}
                />
            </div>
        </div>
            {songData.length>0 ? 
                <div className=' px-7 text-white mt-2 h-[607px] rounded-lg rounded-b-lg bg-c3 pb-5  overflow-auto '>
                <div className=' text-sm text-left mt-7 mb-5 text-gray-400'>Showing search results for '{searchtext}'</div>
                    {songData.map((item) => {
                        return <Singlesong info={item} playSound={()=>{}} key={JSON.stringify(item)} />
                        })
                    }
                </div> :
            <div className='text-sm text-left mt-7 ml-7 text-gray-400'> nothing to show here. Modify your search key '{searchtext}' </div> }
    </LoggedinContainer>
  )
}

export default Search;
