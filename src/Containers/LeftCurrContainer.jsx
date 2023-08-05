import React from 'react'
import { InfoBiografiaEs } from '../Usage/InfoBiografiaEs'
import { InfoContactEs } from '../Usage/InfoContactEs'
import { InfoIdiomasEs } from '../Usage/InfoIdiomasEs'


export const LeftCurrContainer = () => {
  return (
    <div className="curriculumIzq w-2/5 bg-indigo-300">
        <div className='w-3/4 mx-auto'>
            <img className='w-full my-4' src="src\Pictures\ProfilePicture.jpg" alt="Foto de perfil" />
        </div>
        <InfoBiografiaEs />
        <InfoIdiomasEs />
        <InfoContactEs />
        <div className='my-3 flex justify-center'>
            <img className='w-3/5' src="src\Pictures\QR.png" alt="QR Code" />
        </div>
    </div>
  )
}
