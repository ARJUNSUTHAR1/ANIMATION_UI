import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full h-fit  bg-[#004d43] py-10 rounded-3xl'>
      <div className="w-full overflow-hidden text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap gap-[3vw] ">
        <motion.h1 intial={{x:"0"}} animate={{x:"-102.5%"}} transition={{repeat : Infinity, ease : "linear" ,duration : 8}} className='uppercase text-[24vw] leading-none tracking-tighter font-["Founders_Grotesk_Condensed"] pt-14 -mb-12 font-15'>we are ochi</motion.h1>
        <motion.h1 intial={{x:"0"}} animate={{x:"-102.5%"}} transition={{ repeat : Infinity,  ease :"linear" , duration : 8}} className=' uppercase text-[24vw] leading-none  tracking-tighter font-["Founders_Grotesk_Condensed"] pt-14 -mb-12 font-15'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee
