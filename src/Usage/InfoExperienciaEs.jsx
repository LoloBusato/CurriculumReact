import React from 'react'
import { Titles } from '../Functions/Titles'

export const InfoExperienciaEs = () => {
  return (
    <div id="experienciaLaboral" className="mt-4">
        <Titles text="EXPERIENCIA LABORAL" />         
        <div className='w-4/5 ml-10 mt-2'>
            <p><b>DESARROLLADOR FULLSTACK</b></p>
            <p className='mt-1'><i>Mar 2023 - actualidad | TheDoniPhone</i></p>
            <ul className="list-disc list-inside">
              <li>Diseño de bases de datos, modelado de datos, consultas y optimización del rendimiento con <b>MySQL</b></li>
              <li>Limpieza de datos en formato <b>CSV</b> con <b>Python</b> y su almacenamiento a una base SQL</li>
              <li>Desarrollo frontend con <b>React.js</b> utilizando componentes y buenas prácticas para escalabilidad</li>
              <li>Desarrollo backend utilizando <b>Node.js</b> para crear APIs RESTful y manejar solicitudes HTTP</li>
            </ul>
        </div>
        <div className='w-4/5 ml-10 mt-2'>
            <p><b>TÉCNICO ESPECIALIZADO EN APPLE</b></p>
            <p className='mt-1'><i>Ago 2020 - Mar 2023 | TheDoniPhone</i></p>
            <ul className="list-disc list-inside">
              <li>Capacitación y supervisión de personal técnico</li>
              <li>Implementación de nuevas tecnologías</li>
              <li>Diagnóstico y reparación de dispositivos Apple</li>
            </ul>
        </div>
    </div>
  )
}
