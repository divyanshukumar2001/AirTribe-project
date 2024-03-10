'use client'

import React from 'react'
import { GripVertical, Trash2 } from 'lucide-react'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import NewItem from './NewItem'
import MainItem from './mainItem'
import AddNewStatus from './addNewStatus'

const Status = (props) => {



  return (
    <div className='md:w-[29vw] h-fit w-full'>
      <div className='w-full mb-[1rem] flex items-center justify-between'>
        <div className='flex gap-[0.7vw] items-center'>
          <p style={{
            backgroundColor: props.color
          }} className='font-medium rounded-md px-[0.5vw]'>
            {
              props.title
            }
          </p>
          <p className='font-medium text-black/30 px-[0.5vw]'>
            {
              props.items.length
            }
          </p>
        </div>
        <div className='flex gap-[0.7vw] items-center'>
          <Trash2
            onClick={() => props.handleDeleteStatus(props.id)}
            className='cursor-pointer text-black/30 hover:text-red-600' />
          <AddNewStatus handleAddStatus={(title) => props.handleAddStatus(title, props.id)} />
          <div {...props.draggableProps?.dragHandleProps}>
            <GripVertical
              className='text-black/30 hover:text-black/60'

            />
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col gap-[1rem]'>
        <Droppable
          type='STATUS'
          droppableId={`${props.id}`}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className='flex flex-col gap-[1rem]'>
              {
                props.items.map((item, index) => (
                  <Draggable

                    key={item.id}
                    draggableId={item.id}
                    index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        <MainItem
                          id={item.id}
                          draggableProps={provided}
                          title={item.title} />
                      </div>
                    )}
                  </Draggable>
                ))
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <NewItem
          handleAddItem={(desc, title) => props.handleAddItem(props.id, desc, title)}
        />
      </div>
    </div>
  )
}

export default Status