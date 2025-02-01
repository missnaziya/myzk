// *********************
// Role of the component: Simple H2 heading component
// Name of the component: Heading.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Heading title={title} />
// Input parameters: { title: string }
// Output: h2 heading title with some styles 
// *********************

import React from 'react'

const Heading = ({ title } : { title: string }) => {
  return (
    <h1 className="  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
    font-extrabold text-center mt-20 
    bg-gradient-to-r from-black via-[#ea580c] to-[#ea580c] 
    bg-clip-text text-transparent
">
   { title }</h1>
  )
}

export default Heading