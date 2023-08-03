import React from 'react'
import styles from '../Styles/contact.module.css'

export const ContactoInfo = ({ info, img1, img2, href }) => {
  return (
    <div className={styles.curriculumContacto}>
        <a href={href} className={styles.curriculumTexto} target='_blank' >
            <i className={img1 + ' ' + img2}></i>
            {info}
        </a>
    </div>
  )
}
