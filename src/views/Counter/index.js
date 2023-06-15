import {useState} from 'react'
import Button from './components/Button'
import Number from './components/Number'
import './style.css'

function Counter(){
    const [counter, setCounter] = useState(0)

    const handleAdd = function(event){
        setCounter(counter+1)
    }

    const handleSubstract = function(event){
        setCounter(counter-1)
    }

    // const state = useState(0)
    // const counter = state[0]
    // const setCounter = state[1]


    return(
        <section className="counter">
            <h1>Contador</h1>
            <div className="counter_container">
                <Button symbol={"-"} handleClick={handleSubstract}/>
                <Number counter={counter}/>
                <Button symbol={"+"} handleClick={handleAdd}/>
            </div>
        </section>
    )
}; 
export default Counter;