import React from 'react'
import CardHome from './CardHome'

const Marcas = () => {
  return (
    <section className='mx-auto flex h-full w-full max-w-6xl flex-col gap-10 overflow-hidden py-5'>
      <h2 className='text-left text-3xl font-bold '>Las mejores marcas para vos</h2>
      <section className='grid h-full w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center  gap-16 bg-gray-200  py-5'>
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
        <CardHome />
      </section>
    </section>
  )
}

export default Marcas
