import axios from "axios";
import {
    ADD_FAV,
    REMOVE_FAV,
    FILTER,
    ORDER,
    ADD_CHARACTER,
    REMOVE_CHARACTER,
    CLEAN_CHARACTERS,
    ADD_LOCAL_STORAGE_CHARACTERS,
} from "./types";

export const addFav = (character) => async (dispatch) => {
    const endpoint = "http://localhost:3001/rickandmorty/fav";

    try {
        const { data } = await axios.post(endpoint, character);
        dispatch({
            type: ADD_FAV,
            payload: data,
        });
    } catch {
        window.alert(" Ups: Error al añadir favoritos"); //Esto no debería ejecutarse nunca.
    }
};

export const removeFav = (id) => async (dispatch) => {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;

    try {
        const { data } = await axios.delete(endpoint);
        dispatch({
            type: REMOVE_FAV,
            payload: data,
        });
    } catch {
        window.alert(" Ups: Error al eliminar un favorito"); //Esto no debería ejecutarse nunca.
    }
};

export const filterCards = (gender) => ({
    type: FILTER,
    payload: gender,
});

export const orderCards = (order) => ({
    type: ORDER,
    payload: order,
});

export const getCharacters = (id) => async (dispatch) => {
    const endpoint = "http://localhost:3001/rickandmorty/character/" + id;

    try {
        const { data } = await axios(endpoint);
        dispatch({
            type: ADD_CHARACTER,
            payload: data,
        });
    } catch {
        window.alert("Error al buscar el personaje");
    }
};

export const removeCharacter = (id) => ({
    type: REMOVE_CHARACTER,
    payload: id,
});

export const cleanCharacters = () => ({
    type: CLEAN_CHARACTERS,
});

export const getLocalStorageCharacters = (characters) => ({
    type: ADD_LOCAL_STORAGE_CHARACTERS,
    payload: characters,
});
