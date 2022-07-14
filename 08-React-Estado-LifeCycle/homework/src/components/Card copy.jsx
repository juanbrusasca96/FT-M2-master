import React from 'react';
import styles from '../styles/Card.module.css'

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div>
      <button className={styles.exit} onClick={onClose}>x</button>
      <h3>{name}</h3>
      <div className={styles.minmax}>
        <div className={styles.temperatura}>
          <h5>Min</h5>
          <div>{min}</div>
        </div>
        <div className={styles.temperatura}>
          <h5>Max</h5>
          <div>{max}</div>
        </div>
        <div className={styles.divImagen}>
          <img className={styles.imagen} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
        </div>
      </div>
    </div>
  )
};