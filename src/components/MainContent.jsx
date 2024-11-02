import React from 'react'
import SearchBar from './ContentComponents/SearchBar'
import Notification from './ContentComponents/Notification'
import MusicTypeCard from './ContentComponents/MusicTypeCard'
import RecentlyPlayed from './ContentComponents/RecentlyPlayed'

const MainContent = () => {
  return (
    <div className='py-8 !w-[82%]'>
      <div className='flex justify-between w-full px-[64px] mb-5 h-[50px] ' >
        {/* search bar */}
        <SearchBar/>

        {/* Notification */}
        <Notification/>
      </div>

      {/* Music Type Card */}
      <MusicTypeCard/>

      {/* Recently Played */}
      <RecentlyPlayed/>
    </div>
  )
}

export default MainContent
