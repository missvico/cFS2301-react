import styles from './Character.module.css';
import {Link} from 'react-router-dom'

function CharacterCard({character}){
    const {name, height, mass, hair_color, skin_color, eye_color, birth_year} = character
    const id = character.url.split("/")[5]
    return(
        <Link to={`/starwars/${id}`}>
        <div className={styles.card}>
            <h3>{name}</h3>
            <ul>
                <li>
                    Height: {height}
                </li>
                <li>
                    Mass: {mass}
                </li>
                <li>
                    Hair Color: {hair_color}
                </li>
                <li>
                    Skin Color: {skin_color}
                </li>
                <li>
                    Eye Color: {eye_color}
                </li>
                <li>
                    Birth Year: {birth_year}
                </li>
            </ul>
        </div>
        </Link>
    )
};

export default CharacterCard