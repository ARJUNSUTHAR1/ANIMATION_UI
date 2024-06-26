import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { Power4 } from 'gsap/all';

const Featured = () => {
   const cards = [useAnimation() ,useAnimation()]
   const handleHover = (index)=>{
      cards[index].start({y:"0"})
   }
   const handleHoverEnd = (index)=>{
    cards[index].start({y:"100%"})
 }
   
  return (
    <div className='w-full py-20 '>
        <div className='w-full px-20  border-b-[1px] border-zinc-700 pb-10 '>
        <h1 className='text-6xl tracking-tighter capitalize '>featured projects</h1>
        </div>
        <div className='px-20 mt-10'>
        <div className="cards w-full flex justify-between items-center gap-5">
            <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative w-1/2 h-[80vh]">
                    <h1 className='absolute  text-8xl flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 -translate-y-1/2  top-1/2 font-semibold z-10'>
                        {"FYDE".split("").map((item,index)=>(
                            <motion.span initial={{y:"100%"}} animate ={cards[0]} transition={{ease :[0.22,1,0.36,1],delay : index*0.1}} className='inline-block' >{item}</motion.span>
                        ))}
                    </h1> 
                <div className="overflow-hidden card w-full h-full rounded-2xl bg-white">
                    <img className="w-full h-full bg-cover"src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                </div>
            </motion.div>


            <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer relative w-1/2 h-[80vh]">
                    <h1 className='absolute  text-8xl flex text-[#CDEA68] overflow-hidden right-full translate-x-1/2 -translate-y-1/2  top-1/2 font-semibold'>
                        {"VISE".split("").map((item,index)=>(
                            <motion.span initial={{y:"100%"}} animate ={cards[1]} transition={{ease :[0.22,1,0.36,1],delay : index*0.1}} className='inline-block' >{item}</motion.span>
                        ))}
                    </h1> 
     
                <div className="card  w-full h-full rounded-2xl  bg-white ">
              
                    <img className="w-full h-full bg-cover"src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="" />
                </div>
            </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Featured
