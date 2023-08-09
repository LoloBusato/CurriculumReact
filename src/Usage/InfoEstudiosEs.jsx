import React from 'react'
import { CoursesInfo } from '../Functions/CoursesInfo';
import { Titles } from '../Functions/Titles'

const objEstudiosEs = [
    {title: "LICENCIATURA EN ANÁLISIS DE SISTEMAS", place: "2022 - actualidad | Universidad de Buenos Aires", info: ""},
    {title: "TÉCNICO EN ELECTRÓNICA", place: '2015 - 2020 | Escuela Técnica "República Francesa"', info: ''}
  ];

export const InfoEstudiosEs = () => {
  return (
    <div id="estudios" className="mt-4">
        <Titles text="ESTUDIOS" />
        {objEstudiosEs.map(({ title, place, info }) => <CoursesInfo title={title} place={place} info={info} />)}
    </div>
  )
}
