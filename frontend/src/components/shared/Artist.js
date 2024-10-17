import React from 'react';

export const Artist = ({image, name, desc, id}) => {
  return (

    <div className='w-[190px] h-[230px] p-3 mr-2 rounded cursor-pointer text-left text-white hover:bg-[#ffffff10] overflow-hidden'>
        <img className='rounded-[50%] w-[160px] h-[160px] object-cover' src={image} alt=""/>
        <p className=' mt-1 text-[14px] overflow-hidden text-ellipsis whitespace-nowrap'> {name} </p>
        <p className='text-gray-500 text-sm overflow-hidden text-ellipsis whitespace-nowrap'>{desc}</p>
    </div>
  )
}