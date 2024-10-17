import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

export const IconText = ({iconName, displayText, active, targetLink}) => {
  // console.log(active)
  return (
    <Link to={targetLink}>
      <div className={`flex items-center justify-start pb-5 cursor-pointer hover:text-white ${ active? 'text-white': 'text-gray-400'} `}>
          <div className={`pl-6 `}>
              <Icon icon={iconName}
              color='currentColor' fontSize={25} />
          </div>
          <div className={`pl-4  font-semibold text-sm `}> {/* hover written after text-white => overides the font color*/}
              {displayText}
          </div>
      </div>
    </Link>
  )
}
