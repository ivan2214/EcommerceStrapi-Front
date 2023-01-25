import React from 'react'
import CardCategory from '@/components/CardCategory'

const Categories = () => {
  return (
    <section className='mx-auto flex h-full w-full max-w-6xl flex-col gap-10 py-5'>
      <h2 className='text-left text-3xl font-bold '>¿Qué estás buscando?</h2>
      <section className='grid h-full w-full grid-cols-[repeat(auto-fit,minmax(150px,1fr))] place-items-center  gap-16 bg-gray-200  py-5'>
        {/* {Categories?.map((c) => {
          return <CardCategory />
        })} */}
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
        <CardCategory />
      </section>
    </section>
  )
}

export default Categories
