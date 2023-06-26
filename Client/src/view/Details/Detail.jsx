import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import styles from './Detail.module.css'
export default function Detail() {

    const { id } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => setCharacter(response.data))
            .catch(() => window.alert('No llego nada'))

        return setCharacter({});
    }, [id])
    console.log(character);
    return (
        <main>
            <img src={character.image} alt={character.name} />
            <h1>{character.name}</h1>
            <h3>ID: {character.id}</h3>
            <h3>Gender: {character.gender}</h3>
            <h3>Status: {character.status}</h3>
            <h3>Species: {character.species}</h3>
            <h3>Subspecies: {character.species}</h3>
            <h3>Origin: {character.origin?.name}</h3>
            <h3>Location: {character.location?.name}</h3>

        </main>
    )
}