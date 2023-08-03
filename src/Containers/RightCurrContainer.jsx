import React from 'react'
import { Titles } from '../Functions/Titles';
import { InfoEstudiosEs } from '../Usage/InfoEstudiosEs';
import { InfoExperienciaEs } from '../Usage/InfoExperienciaEs';
import { InfoIdiomasEs } from '../Usage/InfoIdiomasEs';
let curriculumStudiesEs = "Estudiante de Licenciatura en Análisis de Sistemas";
import styles from '../Styles/rightCurr.module.css'

export const RightCurrContainer = () => {
  return (
    <div className="curriculumDer">
        <div className={styles.curriculumHeader}>
            <h1>LORENZO BUSATO</h1>
            <p><i id="curriculum-studies">{curriculumStudiesEs}</i></p>
        </div>
        <div id="lenguajes" className="mgt40">
            <Titles text="LENGUAJES Y LIBRERIAS MANEJADAS" />
            <div className={styles.curriculumParrafoLenguaje}>
                <p><b>Analisis de Datos: </b>Python, Pandas, NumPy, Matplotlib, SeaBorn, Bash.</p>
                <p><b>Bases de Datos: </b>MySQL, MongoDB, PostgreSQL.</p>
                <p><b>Controlador de Versiones: </b>Git.</p>
                <p><b>FrontEnd: </b>React.js, Tailwind, JavaScript, HTML, CSS, D3.</p>
                <p><b>BackEnd: </b>Node.js, Express.js.</p>
            </div>
        </div>
        <InfoEstudiosEs />
        <InfoIdiomasEs />
        <InfoExperienciaEs />
    </div>
  )
}
