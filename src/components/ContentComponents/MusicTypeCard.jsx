import React from 'react'

const MusicTypeCard = () => {
  return (
    <div className='flex gap-10 relative ' >
        {/* 1st card */}
      <div className='!ml-[64px] left-content-type hover:shadow-lg hover:shadow-pink-500/80 ' >
        <div className='pl-5' >
            <h1 className='text-[72px] font-bold ' >
                GET LOST
            </h1>
            <p className='text-[32px] text-[#fff]/30 -mt-10 font-bold ' >
                in your music
            </p>
        </div>
        <img src="/playOutLine.svg" alt="play"  className='absolute bottom-5' />
      </div>

      {/* 2nd card */}
      <div className='rigth-content-type rounded-tl-[20px] rounded-bl-[20px] hover:shadow-lg hover:shadow-blue-500/50 ' >
        <div className='pl-5' >
            <h1 className='text-[72px] font-bold ' >
                MELLOW
            </h1>
            <p className='text-[32px] text-[#fff]/30 -mt-10 font-bold ' >
                beats.
            </p>
        </div>
        <img src="/playOutLine.svg" alt="play"  className='absolute bottom-5' />
      </div>
    </div>
  )
}

export default MusicTypeCard
