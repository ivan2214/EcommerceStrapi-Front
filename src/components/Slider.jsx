import React, { useState } from 'react'
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
  console.log(images[imgIndex])
  return (
    <section className='overflow-hidden relative flex min-h-[50vh] w-full flex-col  '>
      <img
        style={{ opacity: opacity, transform: `translateX(${translate})` }}
        src={images[imgIndex]}
        className='mx-auto max-h-96    min-h-full min-w-full max-w-lg object-contain transition-all duration-500 ease-in-out lg:aspect-[16/16]'
        alt=''
      />
      <div className='absolute top-0   z-50 flex h-full w-full items-center justify-between '>
        <button onClick={prevImage}>
          <BsArrowLeft className=' rounded-full bg-gray-300 mx-5  text-center text-2xl  text-gray-900' />
        </button>
        <button onClick={nextImage}>
          <BsArrowRight className=' rounded-full bg-gray-300 mx-5  text-center text-2xl  text-gray-900' />
        </button>
      </div>
    </section>
  )
}

export default Slider
