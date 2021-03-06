import React, { useEffect, useState } from 'react'
import ListItem from '../ListItem/ListItem'
import { Btn, Lista, ListDetail } from './styles'


const List = ({pokeball}) => {

    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=50")

    const getAllPokemons = async () => {
        const res = await fetch(loadMore)
        const data = await res.json()

        setLoadMore(data.next)

        function createPokemonObject(result){
            result.forEach( async(pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()

                setAllPokemons(currentList => [...currentList, data])
            })
        }
        createPokemonObject(data.results)
        await console.log(allPokemons)
    }

    useEffect(()=> {
        getAllPokemons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
       
        <Lista >
            <ListDetail>
            {allPokemons
            .sort((a,b) => a.id > b.id ? 1 : -1)
            .map((pokemon, index) => 
            <ListItem
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            key={index}
            pokeball={pokeball}
             />
                )}
            </ListDetail>
            <Btn onClick={() => getAllPokemons()}>Carregar mais</Btn>
        </Lista>
    )
}

export default List
