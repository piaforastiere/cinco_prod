import React, {useEffect} from 'react'

// hooks react redux
import {useDispatch, useSelector} from 'react-redux'
import { getPokemonsAction, nextPokemonAction, previousPokemonAction, pokeDetailAction } from '../redux/pokeDucks'
import Detail from './Detail'

const Pokemons = () => {

    const dispatch = useDispatch()

    const pokemons = useSelector(store => store.pokemons.results)
    const next = useSelector(store => store.pokemons.next)
    const previous = useSelector(store => store.pokemons.previous)

    useEffect(() => {
        const fetchData = () => {
            dispatch(getPokemonsAction())
        }
        fetchData()
    }, [dispatch])
    
    return (
        <div className="row mt-5" >
            
            <div className="col-md-6" >
                
                <h3>Pokemon list</h3>
                <ul  className="mt-4 list-group" >
                    {
                        pokemons.map(item => (
                            <li className="list-group-item" key={item.name} > 
                                { item.name } 
                                <div className="btn btn-sm btn-dark float-end"
                                     onClick={() => dispatch(pokeDetailAction(item.url))} >
                                    info
                                </div>
                            </li>
                        ))
                    }
                </ul>
            
                <div className="d-flex justify-content-between mt-4" >
                {
                    pokemons.length === 0 &&
                    <button className="btn btn-dark" onClick={() => dispatch(getPokemonsAction())} > Get pokemons </button>
                }
                {
                    next &&
                    <button className="btn btn-dark" onClick={() => dispatch(nextPokemonAction())} > Next pokemons </button>
                }
                
                
                {
                    previous &&
                    <button className="btn btn-dark" onClick={() => dispatch(previousPokemonAction())} > previous pokemons </button>
                }
                </div>
                
                
            </div>
            <div className="col-md-6">
                <h3>Pokemon detail</h3>
                <Detail />
            </div>
           
            
        </div>
    )
}

export default Pokemons
