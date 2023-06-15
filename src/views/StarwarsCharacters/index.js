
import {useState, useEffect} from 'react'
import axios from 'axios'
import CharacterCard from './components/CharacterCard'
import Loader from './components/Loader';
import Pagination from './components/Pagination';

function StarwarsCharacters(){
    const [characters, setCharacters]= useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalCharacters, setTotalCharacters] = useState(0)

    

    useEffect(
        function(){
            setLoading(true)
            axios({
                url: `https://swapi.dev/api/people?page=${page}`
            }).then(
                response=>{
                    setCharacters(response.data.results)
                    setTotalCharacters(response.data.count)
                    setLoading(false)
                }
            )
        },
    [page]) //arreglo de dependencia

    function handleClick(event){
        if(event.target.name=="previous"){
            setPage(Number(page)-1)
        } else if(event.target.name=="nest"){
            setPage(Number(page)+1)
        }else{
            setPage(event.target.name)
        }
    }

    return(
        <section>
            <h1>Star Wars</h1>
            {loading? <Loader/>:
            <>
                <Pagination handleClick={handleClick} totalCharacters={totalCharacters}/>
                {characters.map(
                    character=> <CharacterCard  character={character}/>
                )}
            </>
            }
        </section> 
    )
}
export default StarwarsCharacters;