import React from 'react'
import { InfoBiografiaEs } from '../Usage/InfoBiografiaEs'
import { InfoContactEs } from '../Usage/InfoContactEs'
import styles from '../Styles/leftCurr.module.css'


export const LeftCurrContainer = () => {
  return (
    <div className="curriculumIzq">
        <div className={styles.curriculumDiv}>
            <img className={styles.curriculumFoto} src="src\Pictures\ProfilePicture.jpg" alt="Foto de perfil" />
        </div>
        <InfoBiografiaEs />
        <p className={styles.curriculumDots}>..........................................</p>
        <InfoContactEs />
        <div className={styles.qrConteiner}>
            <img className={styles.qrCode} src="src\Pictures\QR.png" alt="QR Code" />
        </div>
    </div>
  )
}
