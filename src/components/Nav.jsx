import React, { useState } from 'react'
import AvatarUI from './NavComponents/Avatar';
import Browse from './NavComponents/Browse';
import Playlists from './NavComponents/Playlists';


const Nav = () => {
  return (
    <div className='w-[18%] bg-[#f1f1f1] ' >
        <div className='px-10 py-5 ' >
            <div>
                <ul className='flex gap-3' >
                    <li className='w-5 h-5 inline-block bg-[#ff0000b6] rounded-[50%] ' ></li>
                    <li className='w-5 h-5 inline-block bg-[#FFA500] rounded-[50%] ' ></li>
                    <li className='w-5 h-5 inline-block bg-[#008000] rounded-[50%] ' ></li>
                </ul>
            </div>

            {/* avatar */}
            <AvatarUI/>

            {/* Browse */}
            <Browse/>

            {/* Playliists */}
            <Playlists/>
        </div>
    </div>
  )
}

export default Nav
