import React from 'react'
import GlobalContainer from './GlobalContainer'
import flexImage1 from '@/images/flexImage1.png'
import flexImage2 from '@/images/flexImage2.png'
import flexImage3 from '@/images/flexImage3.png'
import flexImage4 from '@/images/flexImage4.png'
import flexImage5 from '@/images/flexImage5.png'
import flexImage6 from '@/images/flexImage6.png'
import Image from 'next/image'

const FlexImages = () => {
  return (
    <GlobalContainer className={'grid grid-cols-6 gap-5'}>
        <Image src={flexImage1} width={1000} height={1000} alt='flexImage1' className='w-full h-[15rem] object-cover' />
        <Image src={flexImage2} width={1000} height={1000} alt='flexImage1' className='w-full h-[15rem] object-cover' />
        <Image src={flexImage3} width={1000} height={1000} alt='flexImage1' className='w-full h-[15rem] object-cover' />
        <Image src={flexImage4} width={1000} height={1000} alt='flexImage1' className='w-full h-[15rem] object-cover' />
        <Image src={flexImage5} width={1000} height={1000} alt='flexImage1' className='w-full h-[15rem] object-cover' />
        <Image src={flexImage6} width={1000} height={1000} alt='flexImage1' className='w-full h-[15rem] object-cover' />
    </GlobalContainer>
  )
}

export default FlexImages