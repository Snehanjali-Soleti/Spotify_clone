import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Cards = ({image, name, desc, playlistId}) => {
  const navigate = useNavigate();
  return (
    <div className='w-[190px] h-[230px] p-3 mr-2 rounded cursor-pointer text-left text-white hover:bg-[#ffffff10] overflow-hidden'
      onClick={()=>{navigate("/playlist/"+ playlistId)}}>
        <img className='rounded w-[160px] h-[160px] object-cover' src={image} alt=""/>
        <p className=' mt-1 text-[14px] overflow-hidden text-ellipsis whitespace-nowrap'> {name} </p>
        <p className='text-gray-500 text-sm overflow-hidden text-ellipsis whitespace-nowrap'>{desc}</p>
    </div>
  )
}