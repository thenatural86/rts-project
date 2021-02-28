import React from 'react'

export const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
  }

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('dragging')
  }

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        drag me
      </div>
    </div>
  )
}
