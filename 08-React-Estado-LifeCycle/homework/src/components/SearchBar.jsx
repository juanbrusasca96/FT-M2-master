import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input className='input'
        type="text"
        placeholder="Ciudad..."
        onChange={e => {setCity(e.target.value); console.log(e.target.value);}}
      />
      <input className='boton' type="submit" value="Agregar" />
    </form>
  );
}
