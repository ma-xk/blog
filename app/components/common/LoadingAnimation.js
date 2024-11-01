
import React from 'react'
import loadingGif from '../../assets/gif/loading.gif'
import Image from 'next/image'

const LoadingAnimation = () => {
  return (
    <div className='w-40 h-40 mx-auto'> 
      <Image src={loadingGif} alt='loading' />
    </div>
  )
}

export default LoadingAnimation