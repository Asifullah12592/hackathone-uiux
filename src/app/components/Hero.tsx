import React from 'react'
import Content from './content/Content'
import Card from './content/Card' 
import Card2 from './content/Card-2' 



const Hero = () => {
  return (
    <div className='w-[100%] h-fit bg-contentBg border border-black-900'>
      <Content />
      <Card />
      <Card2 />
    </div>
  )
}

export default Hero
