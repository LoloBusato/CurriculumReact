import React from 'react'

export const ContactoInfo = ({ info, img1, img2, href }) => {
  return (
    <div className='w-full mt-3 ml-10 text-left'>
        <a href={href} className='w-4/5 text-black ' target='_blank' >
            <i className={`${img1} ${img2}`}></i>
            {info}
        </a>
    </div>
  )
}
