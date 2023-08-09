import React from 'react'
import { Paragraph } from '../Functions/Paragraph';
import { Titles } from '../Functions/Titles'

const biografiaEs = [
  {text: "Soy una persona comprometida, autodidacta  y responsable, con una pasión por el aprendizaje y la colaboración. Mi entusiasmo por la programación y la electrónica me ha llevado a una trayectoria de un año como Programador Web y tres años como Técnico en Electrónica."},
  {text: "Mi objetivo es encontrar un entorno donde pueda mejorar y utilizar mis habilidades técnicas para contribuir y seguir creciendo como profesional."}
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