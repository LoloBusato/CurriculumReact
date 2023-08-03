import React from 'react'
import styles from '../Styles/courseSection.module.css'

export const CoursesInfo = ({ title, place, info }) => {
  return (
    <div className={styles.curriculumParrafoLenguaje}>
        <p><b>{title}</b></p>
        <p><i>{place}</i></p>
        <p dangerouslySetInnerHTML={{__html: info}}></p>
    </div>
  )
}
