'use client'

import React, { useEffect, useRef } from 'react'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'

const Logos = ({scrollProgress}: {scrollProgress: MotionValue<number>}) => {
  const y = useTransform(scrollProgress, [0, 1], [-700, 0])

  return (
    <div className="h-[250px] bg-black overflow-hidden">
      <motion.div style={{y}} className="h-full bg-black flex justify-center gap-10 items-center p-10">
        {
          [...Array(5)].map((_, i) => {
            // eslint-disable-next-line @next/next/no-img-element
            return <img
              key={`img_${i}`}
              className="w-[80px] h-[80px]"
              src={`/medias/${i+1}.jpg`}
              alt='alt'
            />
          })
        }
      </motion.div>
    </div>
  )
}

export default function Footer() {
  const container = useRef<any>(null)
  const paths = useRef<any>([])
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  })

  useEffect( () => {
    scrollYProgress.on('change', e => {
      paths.current.forEach((path: { setAttribute: (arg0: string, arg1: string) => void }, i: number) => {
        path.setAttribute('startOffset', -40 + (i * 40) + (e * 40) + '%')
      })
    })
  }, [scrollYProgress])

  return (
    <div ref={container}>
      <svg className="w-full mb-40" viewBox="0 0 250 90">
        <path fill="none" id="curve" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"/>
        <text className="text-[6px] uppercase" style={{fill: 'blue'}}>
          {
            [...Array(3)].map((_, i) => {
              return <textPath key={i} ref={ref => paths.current[i] = ref} startOffset={i * 40 + '%'} href='#curve'>
                Lorem ipsum dolor sit amet, cons.
              </textPath>
            })
          }
        </text>
      </svg>
      <Logos scrollProgress={scrollYProgress} />
    </div>
  )
}
