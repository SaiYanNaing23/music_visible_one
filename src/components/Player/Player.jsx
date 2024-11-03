import React, { useState} from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import VolumeUp from '@mui/icons-material/VolumeUp';

const songs = [
    { name: 'James', song: 'Happier', img : '/avatar1.jpg' },
    { name: 'Alice', song: 'Shallow', img : '/avatar2.jpg' },
    { name: 'Michael', song: 'Perfect', img : '/profile.jpg' }
  ];
const Player = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
    };
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? songs.length - 1 : prevIndex - 1
        );
      };
  return (
    <>
        <div className='!w-screen' >
            <div className='flex gap-10 items-center ' >
                <div className=' artist_avatart flex justify-between' >
                    <div className='flex gap-4 items-center ' >
                        <img src={songs[currentIndex].img} alt="profile" className='w-[50px] h-[50px] rounded-[50%] ' />
                        <div >
                            <p className='text-white font-bold text-xl ' >
                                {songs[currentIndex].song}
                            </p>
                            <p className='text-white/50 font-bold text-md ' >
                                {songs[currentIndex].name}
                            </p>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"/></svg>
                </div>

                <div className='flex items-center gap-5' >
                    <img src="/shuffle.svg" alt="shuffle" />
                    <img className='rotate-180 cursor-pointer ' src="/forward.svg" alt="previos" onClick={handlePrevious} />
                    <img src="/player.svg" className='cursor-pointer' alt="player"  />
                    <img src="/forward.svg" className='cursor-pointer' alt="forward" onClick={handleClick} />
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="#fff" d="M464 210.511V264a112.127 112.127 0 0 1-112 112H78.627l44.686-44.687l-22.626-22.626L56 353.373l-4.415 4.414l-33.566 33.567l74.022 83.276l23.918-21.26L75.63 408H352c79.4 0 144-64.6 144-144v-85.489Z"/><path fill="#fff" d="M48 256a112.127 112.127 0 0 1 112-112h273.373l-44.686 44.687l22.626 22.626L456 166.627l4.117-4.116l33.864-33.865l-74.022-83.276l-23.918 21.26L436.37 112H160c-79.4 0-144 64.6-144 144v85.787l32-32Z"/></svg>
                    </div>
                </div>

                <div className='flex justify-between' >
                    <p className='text-white mr-4' >
                        1:39
                    </p>
                    <Box sx={{ width: 400, color: "#fff" }}>
                        <Slider
                            aria-label="Temperature"
                            defaultValue={30}
                            sx={{
                                color: '#fff', // This changes the thumb and track to white
                                '& .MuiSlider-thumb': {
                                borderRadius: '50%',
                                border: '2px solid #fff',
                                },
                                '& .MuiSlider-track': {
                                backgroundColor: '#fff',
                                },
                                '& .MuiSlider-rail': {
                                backgroundColor: '#b0b0b0', // Optional: adjust rail color
                                },
                            }}
                        />
                    </Box>
                    <p className='text-white ml-4' >2:11</p>
                </div>

                <div className='flex gap-4' >
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" fill-rule="evenodd" d="M15.75 6a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75m-2 4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75m-4 4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75m-1 4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75" clip-rule="evenodd"/><path fill="#fff" d="M17 7.25a.75.75 0 0 1 .75.75A3.25 3.25 0 0 0 21 11.25a.75.75 0 0 1 0 1.5c-1.257 0-2.4-.488-3.25-1.286V16.5a3.25 3.25 0 1 1-1.5-2.74V8a.75.75 0 0 1 .75-.75"/></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 640 512"><path fill="#fff" d="M128 0C92.7 0 64 28.7 64 64v224H19.2C8.6 288 0 296.6 0 307.2C0 349.6 34.4 384 76.8 384H320v-96H128V64h320v32h64V64c0-35.3-28.7-64-64-64zm384 128H400c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V256h-96c-17.7 0-32-14.3-32-32zm32 0v96h96z"/></svg>
                    </div>
                    <div>
                        <Box sx={{ width: 200 }}>
                            <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
                                <VolumeUp sx={{color: '#fff'}} />
                                <Slider 
                                    aria-label="Volume" 
                                    sx={{
                                    color: '#fff', // This changes the thumb and track to white
                                    '& .MuiSlider-thumb': {
                                    borderRadius: '50%',
                                    border: '2px solid #fff',
                                    },
                                    '& .MuiSlider-track': {
                                    backgroundColor: '#fff',
                                    },
                                    '& .MuiSlider-rail': {
                                    backgroundColor: '#b0b0b0', // Optional: adjust rail color
                                    },
                                }}/>
                            </Stack>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Player
