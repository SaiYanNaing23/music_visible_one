import React, { useState } from 'react'
import Popover from '@mui/material/Popover';
import Avatar from '@mui/material/Avatar';

const Notification = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [ notiCount, setNotiCount] = useState(3)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

  return (
    <div className='relative ' >
        <div className='relative' >
            <img src="/notification.svg" className='cursor-pointer' alt="noti" onClick={handleClick} />
            <span className='absolute text-white bg-red-600 w-4 h-4 rounded-3xl text-center text-[10px] top-1 -right-1 ' >{ notiCount }</span>
            <Popover 
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <div >
                <div className='px-4 py-2 hover:bg-[#4a4a4a]/10 cursor-pointer ' onClick={handleClose}>
                    <div className='flex justify-between items-center gap-14' >
                        <div className='flex gap-2 items-center' >
                            <Avatar alt="Profile" src="/profile.jpg" />
                            <p className='flex flex-col' >
                                <span className='text-[12px] block  ' >
                                    Mario likes your playlist.
                                </span>
                                <span className='text-[10px] text-black font-bold block ' >
                                    XD 4 Life
                                </span>
                            </p>
                        </div>
                        <div className='block text-[10px] text-[#4a4a4a]/50 ' >
                            2m
                        </div>
                    </div>

                </div>
                <div className='px-4 py-2 hover:bg-[#4a4a4a]/10 cursor-pointer ' onClick={handleClose}>
                    <div className='flex justify-between items-center gap-14' >
                        <div className='flex gap-2 items-center' >
                            <Avatar alt="Profile" src="/profile.jpg" />
                            <p className='flex flex-col' >
                                <span className='text-[12px] block  ' >
                                Jasmine is currently listening to.
                                </span>
                                <span className='text-[10px] text-black font-bold block ' >
                                    Best of Blues
                                </span>
                            </p>
                        </div>
                        <div className='block text-[10px] text-[#4a4a4a]/50 ' >
                            1hr
                        </div>
                    </div>

                </div>
                <div className='px-4 py-2 hover:bg-[#4a4a4a]/10 cursor-pointer ' onClick={handleClose}>
                    <div className='flex justify-between items-center gap-14' >
                        <div className='flex gap-2 items-center' >
                            <Avatar alt="Profile" src="/profile.jpg" />
                            <p className='flex flex-col' >
                                <span className='text-[12px] block  ' >
                                    Marc likes your playlist.
                                </span>
                                <span className='text-[10px] text-black font-bold block ' >
                                    Booping at adobe
                                </span>
                            </p>
                        </div>
                        <div className='block text-[10px] text-[#4a4a4a]/50 ' >
                            5hr 
                        </div>
                    </div>

                </div>
            </div>
        </Popover>
        </div>
    </div>
  )
}

export default Notification
