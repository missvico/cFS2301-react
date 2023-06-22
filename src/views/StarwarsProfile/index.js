import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import CharacterProfile from './components/CharacterProfile'

function StarwarsProfile (){
    const [character, setCharacter] = useState({})
    const {id} = useParams()
    useEffect(
        function(){
            axios({
                url: `https://swapi.dev/api/people/${id}`
            })
            .then(
                response => setCharacter(response.data)
            )
        },
    [])

    return (
        <>
            {character.name &&<CharacterProfile character={character}/>}
        </>
    )
}

export default StarwarsProfile



                //url: `https://swapi.dev/api/people/${id}`
        