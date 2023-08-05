import React from 'react'
import { Languages } from '../Functions/Languages';
import { Titles } from '../Functions/Titles'

const languagesEs = [
    {language: "INGLÉS", level: " - Avanzado C1"},
    {language: "ESPAÑOL", level: " - Nativo"}
  ];

export const InfoIdiomasEs = () => {
  return (
    <div id="idiomas" className="mt-4">
        <Titles text="IDIOMAS" />
        <div className='w-4/5 ml-10 mt-2'>
            {languagesEs.map(({ language, level }) => <Languages language={language} level={level} />)}
        </div>
    </div>
  )
}
