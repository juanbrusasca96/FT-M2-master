import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Ciudad({ onFilter }) {
    const [city, setCity] = useState();
    const { ciudadId } = useParams();
    useEffect(() => { setCity(onFilter(ciudadId)) }, [])
    return (
        <div className="ciudad">
            {
                city != undefined ?
                <div className="container">
                <h2>{city.name}</h2>
                <div className="info">
                    <div>Temperatura: {city.temp} ºC</div>
                    <div>Clima: {city.weather}</div>
                    <div>Viento: {city.wind} km/h</div>
                    <div>Cantidad de nubes: {city.clouds}</div>
                    <div>Latitud: {city.latitud}º</div>
                    <div>Longitud: {city.longitud}º</div>
                </div>
            </div>
            :
            <div></div>}
        </div>
    )
}