import React from 'react'
import { Titles } from '../Functions/Titles';
import { InfoEstudiosEs } from '../Usage/InfoEstudiosEs';
import { InfoExperienciaEs } from '../Usage/InfoExperienciaEs';
import { InfoIdiomasEs } from '../Usage/InfoIdiomasEs'

const curriculumStudiesEs = "Estudiante de Licenciatura en Análisis de Sistemas";

export const RightCurrContainer = () => {
  return (
    <div className="w-3/5  p-0">
        <div className='mt-10 w-4/5 ml-10'>
            <h1 className='text-6xl'>LORENZO BUSATO</h1>
            <p><i className='text-md'>{curriculumStudiesEs}</i></p>
        </div>
        <InfoExperienciaEs />
        <InfoEstudiosEs />
        <div id="lenguajes" className="mt-4">
            <Titles text="LENGUAJES Y LIBRERÍAS" />
            <div className='w-4/5 ml-10 mt-2 '>
                <p className='text-left'><b>Análisis de Datos: </b>Python, Bash</p>
                <p className='mt-1 text-left'><b>Bases de Datos: </b>MySQL, MongoDB</p>
                <p className='mt-1 text-left'><b>FullStack: </b>Git, React.js, Node.js, JavaScript</p>
            </div>
        </div>
        <InfoIdiomasEs />
    </div>
  )
}
