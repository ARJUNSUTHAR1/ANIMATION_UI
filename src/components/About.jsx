import React from 'react'

const About = () => {
  return (
    <div className='w-full rounded-3xl p-20 bg-[#CDEA68] text-black '>
      <h1 className=' font-[Neue_Montreal] text-[3vw] leading-[3vw]'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className=' mt-20 border-t-[1px] border-[#67762c] w-full'></div>
     <div className='flex gap-5 pt-10'>
      <div className='w-1/2 '>
        <h1 className='text-5xl '>Our approach :</h1>
        <button className='mt-4 justify-center flex items-center gap-3 px-10 py-4 rounded-full text-white uppercase bg-zinc-900'>read more
        <div className='w-3 h-3 rounded-full bg-zinc-100'></div>
        
        </button>
      </div>
      <div className='w-1/2 h-[70vh] rounded-3xl bg-[#32371f]'></div>
      </div>
    </div>  
  )
}

export default About
