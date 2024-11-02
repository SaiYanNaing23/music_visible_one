import React from 'react'
import RecentPlayedLists from './RecentPlayedLists'
import RecommentedLists from './RecommentedLists'

const RecentlyPlayed = () => {
  return (
    <div className='px-[64px] flex gap-8' >
        <div className='w-1/2' >
            <h1 className='font-bold text-black text-2xl mt-5 ' >
                Recently Played
            </h1>
                <RecentPlayedLists />
        </div>

        <div className='w-1/2' >
            <h1 className='font-bold text-black text-2xl mt-5 ' >
                Recommended For You
            </h1>
            <RecommentedLists/>
        </div>
    </div>
  )
}

export default RecentlyPlayed
