import React from 'react';
import { useMusic } from '../../stores/useMusics';

const RecommentedLists = () => {
    const { recommendMusic, isFetchMusic} = useMusic()
 
    if(isFetchMusic){
        return (
            <div className='text-center w-full h-full flex items-center justify-center mt-11 ' >
                <img src="/loader.svg" alt="loader"  />
            </div>
        )
    }

  return (
    <>
        <div className='flex gap-10 mt-5 w-[700px] overflow-x-scroll scrollbar-hide  ' >
            {recommendMusic?.map((music, index)=> (
                <div className="relative" key={index} >
                <div className="overflow-hidden rounded w-[200px] relative group single-recommended cursor-pointer ">
                <img src={music.strAlbumThumb} className="recommended_play_list w-[200px] h-[200px]" alt="album" />
                <div className="  single-play w-[200px] h-[200px] bg-black/80 rounded text-center absolute top-0 left-0">
                    <img src="/playOutLine.svg" alt="play" className="mt-[25%] ml-[38%]" />
                </div>
                </div>
                <p className="text-black text-lg mt-3">
                    { music.strAlbumStripped.length > 15 ? music.strAlbumStripped.slice(0,15) + '...' : music.strAlbumStripped}
                </p>
                <p className="text-[#4a4a4a]/50">{music.strArtist}</p>
            </div>
            ))}
        </div>
    </>
    
  );
};

export default RecommentedLists;
