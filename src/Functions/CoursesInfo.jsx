import React from 'react'

export const CoursesInfo = ({ title, place, info }) => {
  return (
    <div className='mx-10 mt-2'>
        <p className='mt-0.5'><b>{title}</b></p>
        <p className='mt-0.5'><i>{place}</i></p>
        <p dangerouslySetInnerHTML={{__html: info}} className='mt-0.5'></p>
    </div>
  )
}
