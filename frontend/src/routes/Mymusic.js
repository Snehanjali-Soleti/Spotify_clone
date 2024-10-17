import React, { useEffect, useState } from 'react';
import  Singlesong  from '../components/shared/Singlesong';
import { makeAuthenticatedGETRequest } from '../utils/serverHelper';
import  LoggedinContainer  from '../routes/Container/LoggedinContainer';

 const Mymusic = () => {
    const [songData, setSongData] = useState([]);

    useEffect(()=>{
        const getData = async () =>{ // in use effect await directly cant be used
            const response = await makeAuthenticatedGETRequest(
                "/song/get/mysongs"
            );
            //console.log(response.data);
            setSongData(response.data);
        }
        getData();
    },[]); //execution takes place only at the time of page mounting
    
  return (
    <LoggedinContainer currentActiveScreen='mymusic'>
        <div className=' px-7 text-white mt-2 h-[726px] rounded-lg rounded-b-lg bg-c3 py-5  overflow-auto '>
            <div className=' text-[25px] text-left font-bold pt-9 pb-9 mt-10'>My Songs</div>
            {songData.map((item) => {
                return <Singlesong info={item} />
                })
            }
        </div>
    </LoggedinContainer>
  );
}

export  default Mymusic;
