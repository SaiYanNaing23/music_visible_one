import React from 'react'

const Playlists = () => {
  return (
    <div className='mt-[64px] text-[#4a4a4a] ' >
        <div className='flex justify-between' >
            <h1 className='text-lg text-[#4a4a4a]/50 font-bold ' >YOUR PLAYLISTS</h1>
            <img src="/circlePlus.svg" alt="plus" />
        </div>
        <ul>
            <li className='flex gap-5 items-center mt-4 hover:font-extrabold cursor-pointer ' >
                <img src="/playlists.svg" alt="playlists" />
                <p className='text-xl ' >Workout Mix</p>
            </li>
            <li className='flex gap-5 items-center mt-4 hover:font-extrabold cursor-pointer ' >
                <img src="/playlists.svg" alt="playlists" />
                <p className='text-xl ' >Chillin' at Home</p>
            </li>
            <li className='flex gap-5 items-center mt-4 hover:font-extrabold cursor-pointer ' >
                <img src="/playlists.svg" alt="playlists" />
                <p className='text-xl ' >Booping at Adobe</p>
            </li>
            <li className='flex gap-5 items-center mt-4 hover:font-extrabold cursor-pointer ' >
                <img src="/playlists.svg" alt="playlists" />
                <p className='text-xl ' >XD 4 life</p>
            </li>
        </ul>
    </div>
  )
}

export default Playlists
