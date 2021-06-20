import axios from 'axios'


//const

const initialData = {
    count: 0,
    next : null,
    previous: null,
    results: [],
   
}


//types
const GET_POKE_SUCCESS = 'GET_POKE_SUCCESS'
const NEXT_POKE_SUCCESS = 'NEXT_POKE_SUCCESS'
const DETAIL_POKE_SUCCESS = 'DETAIL_POKE_SUCCESS'

//reducers
//procesan las acciones

export default function pokeReducer(state = initialData, action) {
    switch (action.type) {
        case GET_POKE_SUCCESS:
            return {...state, ...action.payload}
        case NEXT_POKE_SUCCESS:
            return {...state, ...action.payload}
        case DETAIL_POKE_SUCCESS:
            return {...state, pokeDetail: action.payload}
        default:
            return state
    }
}

//actions
//primera func recibe los param, la segunda el dispatch
//dispatch activa el reducer y getState se obtiene la info del state
export const getPokemonsAction = () => async (dispatch) => {

    // const { offset } = getState().pokemons
    if ( localStorage.getItem('offset=0') ) {
        
        dispatch({
            type: GET_POKE_SUCCESS,
            payload: JSON.parse(localStorage.getItem('offset=0'))
        })

        return
    }
    
    try {
        
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`)
        dispatch({
            type: GET_POKE_SUCCESS,
            payload: res.data
        })
        localStorage.setItem('offset=0', JSON.stringify(res.data))
    } catch (error) {
        console.log(error);
        
    }
}

export const nextPokemonAction = () => async(dispatch, getState ) => {

    // const { offset } = getState().pokemons
    // const next = offset + 20

    const {next} = getState().pokemons

    if ( localStorage.getItem(next) ) {
        
        dispatch({
            type: GET_POKE_SUCCESS,
            payload: JSON.parse(localStorage.getItem(next))
        })

        return
    }

    try {
        
        const res = await axios.get(next)
        dispatch({
            type: NEXT_POKE_SUCCESS,
            payload: res.data
        })

        localStorage.setItem(next, JSON.stringify(res.data))
    } catch (error) {
        console.log(error);
        
    }
}

export const previousPokemonAction = () => async(dispatch, getState ) => {


    const {previous} = getState().pokemons

    if ( localStorage.getItem(previous) ) {
        
        dispatch({
            type: GET_POKE_SUCCESS,
            payload: JSON.parse(localStorage.getItem(previous))
        })

        return
    }
    try {
        const res = await axios.get(previous)
        dispatch({
            type: NEXT_POKE_SUCCESS,
            payload: res.data
        })
        localStorage.setItem(previous, JSON.stringify(res.data))
    } catch (error) {
        console.log(error);
        
    }
}

export const pokeDetailAction = (url = 'https://pokeapi.co/api/v2/pokemon/1/') => async(dispatch) => {

    if ( localStorage.getItem(url) ) {
        
        dispatch({
            type: DETAIL_POKE_SUCCESS,
            payload: JSON.parse(localStorage.getItem(url))
        })

        return
    }

    try {

        const res = await axios.get(url)
        dispatch({
            type: DETAIL_POKE_SUCCESS,
            payload: {
                name: res.data.name,
                weigth: res.data.weight,
                height: res.data.height,
                img : res.data.sprites.front_default
            }
        })
        localStorage.setItem(url, JSON.stringify({
            name: res.data.name,
            weigth: res.data.weight,
            height: res.data.height,
            img : res.data.sprites.front_default
        }))
    } catch (error) {
        console.log(error);
        
    }
}