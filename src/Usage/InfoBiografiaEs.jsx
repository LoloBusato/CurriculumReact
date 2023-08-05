import React from 'react'
import { Paragraph } from '../Functions/Paragraph';
import { Titles } from '../Functions/Titles'

const biografiaEs = [
  {text: "Soy una persona trabajadora que le encanta aprender y ayudar a los demás. Autodidacta y responsable."},
  {text: "Me encuentro en busqueda de un puesto en el que pueda mejorar y aplicar mis conocimientos de programación."},
  {text: "Cuento con 3 años de experiencia como Técnico en Electrónica y 1 año como programador web."},
  ];

export const InfoBiografiaEs = () => {
  return (
    <div className="w-full" id="parrafo">
        <Titles text="PERFIL" />         
        <div>    
            {biografiaEs.map(({ text }) => <Paragraph text={text} />)}
        </div>
    </div>
  )
}