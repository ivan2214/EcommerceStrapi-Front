import React, { useEffect, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const Slider = () => {
  const [imgIndex, setImgIndex] = useState(0)
  const [opacity, setOpacity] = useState(1)
  const [translate, setTranslate] = useState('0')

  const prevImage = () => {
    setTranslate('-100%')
    setOpacity(0)
    setTimeout(() => {
      setImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
      setOpacity(1)
      setTranslate('0%')
    }, 500)
  }
  const nextImage = () => {
    setTranslate('100%')
    setOpacity(0)
    setTimeout(() => {
      setImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
      setOpacity(1)
      setTranslate('0%')
    }, 500)
  }
  const images = [
    'https://www.fullh4rd.com.ar/adminrgb/img/banner/125.png',
    'https://www.fullh4rd.com.ar/adminrgb/img/banner/126.png',
    'https://www.fullh4rd.com.ar/adminrgb/img/banner/137.png',
    'https://www.fullh4rd.com.ar/adminrgb/img/banner/136.png',
  ]

  return (
    <section className='relative  min-h-[50vh] w-full overflow-hidden  '>
      <img
        style={{ opacity: opacity, transform: `translateX(${translate})` }}
        src={images[imgIndex]}
        className='m-auto max-h-96 lg:aspect-auto   min-h-full min-w-full max-w-lg object-contain transition-all duration-500 ease-in-out aspect-[16/16]'
        alt=''
      />
      <div className='absolute top-0   z-50 flex h-full w-full items-center justify-between '>
        <button onClick={prevImage}>
          <BsArrowLeft className=' mx-5 rounded-full bg-gray-300  text-center text-2xl  text-gray-900' />
        </button>
        <button onClick={nextImage}>
          <BsArrowRight className=' mx-5 rounded-full bg-gray-300  text-center text-2xl  text-gray-900' />
        </button>
      </div>
    </section>
  )
}

export default Slider
