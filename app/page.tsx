'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Footer from '@/components/Footer/Footer'

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <div className='h-[100vh]'/>
      <Footer />
    </main>
  )
}
