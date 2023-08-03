import React from 'react'
import { Languages } from '../Functions/Languages';
import { Titles } from '../Functions/Titles'
import styles from '../Styles/courses.module.css'

const languagesEs = [
    {language: "INGLES", level: " - ALTO."},
    {language: "ESPAÑOL", level: " - NATIVO."}
  ];

export const InfoIdiomasEs = () => {
  return (
    <div id="idiomas" className="mgt40">
        <Titles text="IDIOMAS" />
        <div className={styles.curriculumParrafoLenguaje}>
            {languagesEs.map(({ language, level }) => <Languages language={language} level={level} />)}
        </div>
    </div>
  )
}
