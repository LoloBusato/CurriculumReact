import React from 'react'
import { WorkExperience } from '../Functions/WorkExperience';
import { Titles } from '../Functions/Titles'

const objExperienciaEs = [
    {
      title: "Desarrollador FullStack" , 
      time: "2023-actualidad",
      place: "SatWebTDI" , 
      info: ". Infraestructura de almacenamiento utilizando SQL\nLimpieza de datos en formato CSV con Python\nAlmacenamiento de datos con Python a una base de datos SQL\nDesarrollo Front-end con el uso de la libreria React\nComunicacion entre la base de datos y el front-end por medio de apis programadas con Express"
    },
    {
      title: "TÉCNICO ESPECIALIZADO EN APPLE" , 
      time: "2020-actualidad",
      place: "TheDoniPhone" , 
      info: "Diagnostico de dispositivos Apple tales como MacBook, iPad, AppleWatch y iPhone\nReparación de dispositivos Apple tanto de microsoldadura como perifericos"
    }
  ];

export const InfoExperienciaEs = () => {
  return (
    <div id="experienciaLaboral" className="mgt40">
        <Titles text="EXPERIENCIA LABORAL" />         
        {objExperienciaEs.map(({ title, time, place, info }) => <WorkExperience title={title} time={time} place={place} info={info} />)}
    </div>
  )
}
