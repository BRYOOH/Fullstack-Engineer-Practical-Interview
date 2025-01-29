'use client';
import { useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge';

const text='Where Influencers and Brands meet and Interact with to achieve effective Campaign Management. Join and create and account. Lets get started!! ';
const words = text.split(' ');
const Intro = () => {
  const scrollRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target:scrollRef, offset:['start end','end end']
  })
  
  const [currentWord,setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress,[0,1],[0,words.length]);

  useEffect(()=>{
    wordIndex.on('change',(latest)=>{
      setCurrentWord(latest);
    })
  },[wordIndex]);

  return (
    <div className='py-10 px-12'>
        <div className='sticky top-20 md:top-32 lg:top-36'>
            <div className='flex items-center '>
                <p className='text-7xl text-center  text-white font-bold'>
                    Welcome to Campaign Submission tracker. 
                <span>
                {words.map((word,wordIndex)=>(
                <span 
                className={twMerge("transition duration-500 text-white/15",wordIndex<currentWord && 'text-white')}
                key={wordIndex}>{`${word} `}</span>
               ))}
                </span> 
                </p>
            </div>
        </div>
        <div className="h-[150vh]" ref={scrollRef}> 
            </div>
    </div>
  )
}

export default Intro