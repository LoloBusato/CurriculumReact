import React from 'react'
import styles from '../Styles/titles.module.css'

export const Titles = ({ text }) => {
  return (
    <div className="flex pl-10 text-xl">
        <div className={styles.arrowBox}>
            <div className={styles.arrow}>
            </div>
        </div>
        <h2 className='ml-4 font-bold'>{text}</h2>
    </div>
  )
}
