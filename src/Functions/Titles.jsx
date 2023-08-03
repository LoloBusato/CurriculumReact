import React from 'react'
import styles from '../Styles/titles.module.css'

export const Titles = ({ text }) => {
  return (
    <div className={styles.curriculumTitle}>
        <div className={styles.arrowBox}>
            <div className={styles.arrow}>
            </div>
        </div>
        <h2>{text}</h2>
    </div>
  )
}
