import React, { useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useMusic } from '../../stores/useMusics';

const RecentPlayedLists = () => {
    const { musicContent, isFetchMusic, fetchMusicData} = useMusic()
    useEffect(()=> {
      fetchMusicData()
    }, [])
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    if(isFetchMusic){
      return (
        <div className='text-center w-full h-full flex items-center justify-center mt-11 ' >
          <img src="/loader.svg" alt="loader"  />
        </div>
      )
    }
  return (
    <>
    <div className='overflow-y-scroll h-[350px] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-200 ' >
        {musicContent?.map((music, index)=> (
          <div className='mt-4 flex justify-between cursor-pointer hover:bg-[#4a4a4a]/20 p-2 rounded single-list ' key={index} >
            <div className='flex items-center gap-5 relative ' >
              <img src={music.strAlbumThumb} alt="alblum" className='w-[50px] h-[50px] rounded' />
              <div className='hidden show-play-icon-over-profile w-[50px] h-[50px] bg-black/80 rounded text-center absolute ' >
                  <img src="/playOutLine.svg" alt="play" className='mt-1 ml-1 ' />
              </div>
              <p className='text-black font-bold ' >
                  { music.strArtist }
              </p>
            </div>
            <div className='flex items-center gap-10 w-[200px] ' >
              <p className='text-[#4a4a4a]/50 font-bold w-[150px] ' >
                  { music.strAlbumStripped.length > 15 ? music.strAlbumStripped.slice(0,15) + '...' : music.strAlbumStripped}
              </p>
              <p className='text-[#4a4a4a]/50 font-bold flex right-0 flex-end text-end ' >
                  {music.intYearReleased}
              </p>
            </div>
            <div className='flex items-center'>
              <Checkbox {...label} className='bg-red-600' sx={{'&.Mui-checked': {color: 'red',},}} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </div>
            <div className='flex items-center' >
              <img src="/more.svg" alt="more" />
            </div>
          </div>
        ))}
    </div>
    </>
  )
}

export default RecentPlayedLists
