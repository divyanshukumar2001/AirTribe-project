'use client'

import React from 'react'
import { GripVertical, EditIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

const MainItem = (props) => {
  const router = useRouter()
  return (
    <div onClick={() => router.push(`/item/${props.id}`)}
    className='group cursor-pointer h-[7vh] border  justify-betweenw-full px-[5%] flex items-center shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md bg-white'>
      <p className='w-full font-medium truncate text-black/70 text-start group-hover:font-bold'>{
        props.title
      }</p>
      <div className='flex items-center gap-[1rem]'>
        
        <div {...props.draggableProps?.dragHandleProps}>
          <GripVertical
            className='text-black/30'
          />
        </div>
      </div>
    </div>
  )
}

export default MainItem