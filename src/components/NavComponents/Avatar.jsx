import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import Switch from '@mui/material/Switch';
import { Link } from 'react-router-dom';

const AvatarUI = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <div className='flex gap-5 mt-[10%] ' >
                <Link to='/' >
                    <Avatar
                        alt="User Profile"
                        src="/profile.jpg"
                        sx={{ width: 46, height: 46 }}
                        className='cursor-pointer'
                    />
                </Link>
                <div>
                    <div className='flex gap-1' >
                        <p className='text-black font-bold text-lg ' >
                            Joshua
                        </p>
                            <img src="/downArrow.svg" alt="icon" onClick={handleClick} className='cursor-pointer' />
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                            }}
                        >
                            <div className='p-3 ' >
                                <div className='flex gap-6 ' >
                                    <p className='text-[10px] w-[64px] text-[#D90866] border-[#D90866] border rounded-sm text-center ' >
                                        PREMIUM
                                    </p>
                                    <p className='text-[10px] text-[#4a4a4a]/50 ' >Though 11/2</p>
                                </div>

                                <div className='mt-1 flex justify-between items-center ' >
                                    <p className='text-[10px] font-bold text-black ' >
                                        Private
                                    </p>
                                    <Switch {...label} />
                                </div>

                                <div className=' flex justify-between items-center ' >
                                    <p className='text-[10px] font-bold text-black ' >
                                        Explicit Filter
                                    </p>
                                    <Switch {...label} />
                                </div>

                                <div className=' flex justify-between items-center ' >
                                    <p className='text-[10px] font-bold text-black ' >
                                        Friend Activity
                                    </p>
                                    <Switch {...label} />
                                </div>

                                <p className='mt-2 text-[10px] font-bold text-black ' >
                                    Account Setting
                                </p>

                                <div className='text-[#4a4a4aac] text-[10px] text-end flex gap-1 justify-end cursor-pointer ' onClick={handleClose} >
                                    <span className='block' >Log Out </span>
                                    <img src="/logout.svg" alt="logout" />
                                </div>
                            </div>
                        </Popover>
                    </div>
                    <p className='text-[10px] w-[64px] text-[#4a4a4aac] border-[#4a4a4ab1] border rounded-sm text-center ' >
                        PREMIUM
                    </p>
                </div>
    </div>
  )
}

export default AvatarUI
