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
        <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100528/Web_3_y8wbsl.jpg"} width={1000} height={1000} alt='flexImage1' className='w-full h-[15rem] object-cover' />
        <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100530/Web_8_wofgam.jpg"} width={1000} height={1000} alt='flexImage1' className='w-full h-[15rem] object-cover' />
        <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100535/Web_11_xiu5it.jpg"} width={1000} height={1000} alt='flexImage1' className='w-full h-[15rem] object-cover' />
        <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100538/Web_dt7dyn.jpg"} width={1000} height={1000} alt='flexImage1' className='w-full h-[15rem] object-cover' />
        <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100539/Web_12_gmfwip.jpg"} width={1000} height={1000} alt='flexImage1' className='w-full h-[15rem] object-cover' />
        <Image src={"https://res.cloudinary.com/wise-solution-inc/image/upload/v1768100536/Website_1_r76udd.jpg"} width={1000} height={1000} alt='flexImage1' className='w-full h-[15rem] object-cover' />
    </GlobalContainer>
  )
}

export default FlexImages