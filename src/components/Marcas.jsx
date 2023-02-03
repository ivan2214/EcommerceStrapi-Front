import React from 'react'
import { useSelector } from 'react-redux'
import CardHome from './CardHome'

const Marcas = () => {
  const { brands } = useSelector((s) => s.brands)
  return (
    <section className='mx-auto flex h-full w-full max-w-6xl flex-col gap-10  py-5'>
      <h2 className='text-left text-3xl font-bold '>Las mejores marcas para vos</h2>
      <section className='grid h-full w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center  gap-5   py-5'>
        {brands ? (
          brands.map(({ id, attributes }, i) => {
            return (
              <CardHome
                key={id}
                id={id}
                name={attributes?.name}
                logo={`http://localhost:1337${attributes?.logo?.data[0]?.attributes?.url} `}
              />
            )
          })
        ) : (
          <p>cargando marcas ....</p>
        )}
      </section>
    </section>
  )
}

export default Marcas
