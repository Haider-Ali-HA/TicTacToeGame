import React from 'react'

const Square = (props) => {
  return (
    <>
    <div onClick={props.click} className=' dark:hover:bg-gray-100  shadow-[1px_1px_5px_#ff0342,-1px_-1px_3px_#ff0342] hover:bg-black/80  dark:bg-white/90 bg-black/90  rounded-md m-[5px] border-black h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] flex justify-center items-center'>
    <h1 className='text-[25px] font-extrabold dark:text-black font-poppin text-white'>{props.value}</h1>
    </div>
      
    </>
  )
}

export default Square
