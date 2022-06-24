import React from 'react';
import styles from '../styles/SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (<div className={styles.divSearchBar}>
    <input className={styles.input} type="text" placeholder='Ciudad...'/>
    <button className={styles.boton} onClick={onSearch}>Agregar</button>
  </div>)
};