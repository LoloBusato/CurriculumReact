import React from 'react'
import { Paragraph } from '../Functions/Paragraph';
import { Titles } from '../Functions/Titles'

const biografiaEs = [
    {text: "Técnico Superior con 2 años de experiencia en reparación de dispositivos electrónicos."},
    {text: "Me encanta aprender cosas nuevas, soy una persona autodidactica y responsable."},
    {text: "Busco un puesto en el que pueda emplear y ampliar mis conocimientos de programación."}
  ];

export const InfoBiografiaEs = () => {
  return (
    <div className="w100" id="parrafo">
        <Titles text="PERFIL" />         
        <div>    
            {biografiaEs.map(({ text }) => <Paragraph text={text} />)}
        </div>
    </div>
  )
}