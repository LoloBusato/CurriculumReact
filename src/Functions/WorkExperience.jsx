import React from 'react'


export const WorkExperience = ({ title, time, place, info }) => {
  return (
    <div className='w-4/5 ml-10 mt-2'>
        <p><b>{title}</b></p>
        <p className='mt-1'><i>{time}</i></p>
        <p className='mt-1'>{place}</p>
        <p className='mt-1'>{info}</p>
    </div>
  )
}
