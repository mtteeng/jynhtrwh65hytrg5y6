import React from 'react'

export const Country = ({country}) =>{


    return(
        <div>
            <h2>Страна: {country.name}</h2>
            <h2>Население: {country.population}</h2>

            <h3>Номер 1: {26 + 26}</h3>

            <h3>Номер 2: {Math.round(Math.random()*100)}</h3>

        </div>
    )
}