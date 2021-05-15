import React, { useEffect } from 'react'
import { pokeDetailAction } from '../redux/pokeDucks'
import { useDispatch, useSelector } from 'react-redux'

const Detail = () => {

    
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = () => {
            dispatch(pokeDetailAction())
        }
        fetchData()
    }, [dispatch])
    useEffect(() => {
        
        document.querySelector('.navbar').classList.remove('active')
        
        document.querySelector('.LanguageSelector').classList.remove('active')
        
    },[])

    const pokemon = useSelector(store => store.pokemons.pokeDetail)
    
    
    return pokemon ? (
        <div className="card mt-4 text-center" >
            <div className="card-body">
                <img src={pokemon.img} className="img-fluid" alt=""/>
                <div className="card-title text-uppercase">
                    name : {pokemon.name}
                </div>
                <p className="card-text">
                    weight: {pokemon.weigth} - height: {pokemon.height}
                </p>

            </div>
        </div>
    ) : null
}

export default Detail
