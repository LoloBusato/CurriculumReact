import React from 'react'
import styles from '../Styles/biografia.module.css'

export const Paragraph = ({ text }) => {
  return (
    <p className={styles.curriculumTexto}>{text}</p>
  )
}
