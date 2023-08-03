import React from 'react'
import { CoursesInfo } from '../Functions/CoursesInfo';
import { Titles } from '../Functions/Titles'

const objEstudiosEs = [
    {title: "LICENCIATURA EN ANÁLISIS DE SISTEMAS", place: "2022-actualidad", info: "Universidad de Buenos Aires"},
    {title: "CONTADOR PÚBLICO", place: "2020-2021", info: "Universidad de Buenos Aires"},
    {title: "TÉCNICO EN ELECTRÓNICA", place: "2015-2020", info: 'Escuela Técnica N°28 D.E. 10 "República Francesa"'}
  ];

export const InfoEstudiosEs = () => {
  return (
    <div id="estudios" className="mgt40">
        <Titles text="ESTUDIOS" />
        {objEstudiosEs.map(({ title, place, info }) => <CoursesInfo title={title} place={place} info={info} />)}
    </div>
  )
}
