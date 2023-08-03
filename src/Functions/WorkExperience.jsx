import React from 'react'
import styles from '../Styles/courses.module.css'


export const WorkExperience = ({ title, time, place, info }) => {
  return (
    <div className={styles.curriculumParrafoLenguaje}>
        <p><b>{title}</b></p>
        <p><i>{time}</i></p>
        <p>{place}</p>
        <p>{info}</p>
    </div>
  )
}
