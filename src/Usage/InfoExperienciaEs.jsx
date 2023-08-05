import React from 'react'
import { Titles } from '../Functions/Titles'

export const InfoExperienciaEs = () => {
  return (
    <div id="experienciaLaboral" className="mt-4">
        <Titles text="EXPERIENCIA LABORAL" />         
        <div className='w-4/5 ml-10 mt-2'>
            <p><b>DESARROLLADOR FULLSTACK</b></p>
            <p className='mt-1'><i>Marzo 2023-actualidad</i></p>
            <p className='mt-1'>TheDoniPhone</p>
            <ul className="list-disc list-inside">
              <li>Diseño de bases de datos utilizando <b>MySQL</b>, incluyendo el modelado de datos, consultas y optimización del rendimiento</li>
              <li>Limpieza de datos en formato <b>CSV</b> con <b>Python</b> y su almacenamiento a una base de datos SQL</li>
              <li>Desarrollo frontend con <b>React</b> utilizando componentes y buenas prácticas para escalabilidad</li>
              <li>Desarrollo backend utilizando <b>Node.js</b> y <b>Express</b> para crear APIs RESTful y manejar solicitudes HTTP</li>
            </ul>
        </div>
        <div className='w-4/5 ml-10 mt-2'>
            <p><b>TÉCNICO ESPECIALIZADO EN APPLE</b></p>
            <p className='mt-1'><i>Agosto 2020-Marzo 2023</i></p>
            <p className='mt-1'>TheDoniPhone</p>
            <ul className="list-disc list-inside">
              <li>Entrenamiento y manejo de técnicos</li>
              <li>Implementación de nuevas tecnologías</li>
              <li>Diagnostico y reparación de dispositivos Apple tales como MacBook, iPad, AppleWatch y iPhone</li>
            </ul>
        </div>
    </div>
  )
}
