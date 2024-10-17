import React from 'react';
import { popularArtist } from '../assets/assets';
import { Artist } from './shared/Artist';
import { popularAlbums } from '../assets/assets';
import { Cards } from './shared/Cards';


const RightSide = () => {
  return (
    <div className='  text-2xl mt-2 rounded-lg rounded-b-lg bg-c3 py-5 overflow-auto pb-[150px]'>
        <div className='flex flex-row justify-between mt-5'>
          <div className='text-white text-[25px] text-left font-bold pt-9 pb-4 pl-5'> Popular artists </div>
          <div className='text-gray-500 text-[25px] text-left font-semibold pt-9 pl-5 pr-5 hover:text-white text-sm cursor-pointer'> show all </div>
        </div>
        <div className='flex flex-row pl-3 overflow-hidden'>
                {popularArtist.map((item, index) =>
                    item.id < 6 ? (
                      <Artist key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
                    ) : null
                  )}
        </div>

        <div className='flex flex-row justify-between pt-12'>
          <div className='text-white text-[25px] text-left font-bold pt-4 pb-4 pl-5'> Popular albums </div>
          <div className='text-gray-500 text-[25px] text-left font-semibold pb-7 pl-5 pr-5 hover:text-white text-sm cursor-pointer'> show all </div>
        </div>
        <div className='flex flex-row pl-3 overflow-hidden'>
                {popularAlbums.map((item, index) =>
                    item.id < 6 ? (
                      <Cards key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
                    ) : null
                  )}
        </div>

        <div className='flex flex-row justify-between pt-12'>
          <div className='text-white text-[25px] text-left font-bold pt-4 pb-4 pl-5'> Spotify Playlists </div>
          <div className='text-gray-500 text-[25px] text-left font-semibold pb-7 pl-5 pr-5 hover:text-white text-sm cursor-pointer'> show all </div>
        </div>
        <div className='flex flex-row pl-3 overflow-hidden'>
                {popularAlbums.map((item, index) =>
                    item.id < 6 ? (
                      <Cards key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
                    ) : null
                  )}
        </div>


    </div>
  )
}

export default RightSide;
