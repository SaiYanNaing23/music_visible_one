import React from 'react'
import Nav from '../components/Nav'
import MainContent from '../components/MainContent'
import Player from '../components/Player/Player'

const HomePage = () => {
  return (
    <div className='' >
        <div className='w-[100%] h-[85vh] bg-white rounded-bl-[64px] rounded-br-[64px] shadow-lg flex overflow-hidden  ' >
            <Nav/>
            <MainContent/>
        </div>
        <div className='py-[50px] px-[50px] ' >
          <Player/>
        </div>
    </div>
  )
}

export default HomePage
