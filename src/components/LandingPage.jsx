import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='w-full h-fit bg-zinc-900 pt-1'>
      <div className="textstruture mt-52 pl-20">
        {["we create","eye opening","presentations"].map((item,index)=>{
            return <div key={index} className="masker ">
                <div className='w-fit flex items-end overflow-hidden'>
                    {index === 1 && (<motion.div initial={{width : "0"}} animate={{width : "9vw"}} transition={{ease : [0.76, 0, 0.24, 1], duration : '2'}}  className=' mr-[1vw] w-[9vw] h-[5.7vw] relative rounded-md -top-[1.2vw] bg-red-600 '></motion.div>)}
            <h1  className=" pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[7vw] tracking-tighter font-['Founders_Grotesk_Condensed'] font-semibold">{item}</h1>
            </div>
            </div>
            
        })}
   
      </div>
      <div className='border-t-[1px] border-zinc-700 mt-40 flex justify-between items-center py-5 px-20'>
        {["for public and private companies","from the first peach of ipo"].map((item,index)=><p className='text-lg capitalize leading-none tracking-tighter font-light'>{item}</p>
            )}
            <div className="start flex items-center gap-2">
                <div className='px-5 py-2 border-[2px] border-zinc-500 rounded-full text-md uppercase font-light '>start the project</div>
                <div className='w-10 h-10 rounded-full flex items-center justify-center border-[2px] border-zinc-500 '>
                    <span className='rotate-[45deg]'><FaArrowRightLong/></span>
                </div>
            </div>
      </div>
    </div>
  )
}

export default LandingPage
