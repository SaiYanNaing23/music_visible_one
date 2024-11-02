import React from 'react'

const Browse = () => {
  return (
    <div className='mt-[64px] text-[#4a4a4a] ' >
        <h1 className='text-lg text-[#4a4a4a]/50 font-bold ' >BROWSE</h1>
        <ul>
            <li className='flex gap-5 items-center mt-4 cursor-pointer ' >
                <img src="/home.svg" alt="home" />
                <p className='font-extrabold text-xl ' >Home</p>
            </li>
            <li className='flex gap-5 items-center mt-4 hover:font-extrabold cursor-pointer ' >
                <img src="/song.svg" alt="songs" />
                <p className='text-xl ' >Songs</p>
            </li>
            <li className='flex gap-5 items-center mt-4 hover:font-extrabold cursor-pointer ' >
                <img src="/playlist.svg" alt="playlists" />
                <p className='text-xl ' >Playlists</p>
            </li>
            <li className='flex gap-5 items-center mt-4 hover:font-extrabold cursor-pointer ' >
                <img src="/browseProfile.svg" alt="profile" />
                <p className='text-xl ' >Just for you</p>
            </li>
            <li className='flex gap-5 items-center mt-4 hover:font-extrabold cursor-pointer ' >
                <img src="/chart.svg" alt="chart" />
                <p className='text-xl ' >Top Chart</p>
            </li>
        </ul>
    </div>
  )
}

export default Browse
