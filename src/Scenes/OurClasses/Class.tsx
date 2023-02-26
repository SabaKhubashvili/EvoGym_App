import React from 'react'
import { ClassType } from '../../Shared/types'




const Class = ({title,description,img}:ClassType) => {


    const overLayStyles = `p-5 absolute z-10 flex
    h-[81%] w-[100%] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`

  return (
    <li className='relative mx-5 inline-block h-[380px] w-[450px] cursor-pointer'>
        <div className={overLayStyles}>
            <p>{title}</p>
            <p>{description}</p>
        </div>
        <img src={`${img}`} className='' alt={img} />
    </li>
  )
}

export default Class