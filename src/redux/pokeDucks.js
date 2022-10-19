import axios from "axios"

//constants
const initialData = {
    pokemons: []
}

//types
const getPokemonsSucess = 'getPokemonsSucess'
//reducer
export default function pokeReducer(state = initialData, action) {
    switch (action.type) {
        case getPokemonsSucess:
            return {...state, pokemons: action.payload}
        default:
            return state
    }
}
//actions


export const getPokemonsAction = () => async (dispatch, getState) => {
    //ponemos dos funciones flecha porque la primera es una funcion que retorna otra funcion
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        //el dispatch activa el case que le vamos a mandar el switch, con "activar" me refiero que aqui es que se define ese case
        //el payload es el resultado de la accion que le vamos a mandar al reducer
        dispatch({
            type: getPokemonsSucess,
            payload: response.data.results
        })
    }
    catch (error) {
        console.log(error);
    }
}

//********************EXPLICACION *********************/
/*
-nosotros hacemos acciones
-las acciones se procesan en el reducer
-el cual tiene cases que retornan una accion que modifica el estado de nuestro valor inicial
*/