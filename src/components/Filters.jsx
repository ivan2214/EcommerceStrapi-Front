import React from 'react'

const Filters = () => {
  return (
    <section className='flex min-h-screen flex-[.2] flex-col gap-16 overflow-hidden bg-blue-300 p-5'>
      <div className='flex flex-col items-start gap-5 px-5'>
        <h2 className='text-2xl font-bold text-gray-900'>Ordenar por:</h2>
        <button className='rounded-full bg-blue-400 px-10  font-light text-gray-100'>Mayor</button>
        <button className='rounded-full bg-blue-400 px-10  font-light text-gray-100'>Menor</button>
      </div>
      <div className='flex flex-col items-start gap-5 px-5'>
        <h2 className='text-2xl font-bold text-gray-900'>Marca:</h2>
        <select className='select-none rounded-md py-1 text-gray-100 bg-blue-400 px-3' name='' id=''>
          <option value=''>Marca</option>
          <option value=''>logitech</option>
        </select>
      </div>
      <div className='flex flex-col items-start gap-5 px-5'>
        <h2 className='text-2xl font-bold text-gray-900'>Categoria:</h2>
        <select className='select-none rounded-md py-1 text-gray-100 bg-blue-400 px-3' name='' id=''>
          <option value=''>Categoria</option>
          <option value=''>Procesador</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
