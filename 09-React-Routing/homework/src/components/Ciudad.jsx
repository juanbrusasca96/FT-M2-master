import React from "react";
import { useParams } from "react-router-dom";

export default function Ciudad({ city }) {
    const { ciudadId } = useParams();
    return (
        <div className="ciudad">
            <div className="container">
                <h2>{city(ciudadId).name}</h2>
                <div className="info">
                    <div>Temperatura: {city(ciudadId).temp} ºC</div>
                    <div>Clima: {city(ciudadId).weather}</div>
                    <div>Viento: {city(ciudadId).wind} km/h</div>
                    <div>Cantidad de nubes: {city(ciudadId).clouds}</div>
                    <div>Latitud: {city(ciudadId).latitud}º</div>
                    <div>Longitud: {city(ciudadId).longitud}º</div>
                </div>
            </div>
        </div>
    )
}