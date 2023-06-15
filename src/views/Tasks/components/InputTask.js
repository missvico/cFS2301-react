import styles from './Button.module.css';

function InputTask(props){
    return(
        <>
        <input value={props.newTask} onChange={props.handleChange} placeholder="Ingresa una nueva tarea"/>
        <button className={styles.button} onClick={props.handleClick}>Agregar</button>
        </>
    )
}

export default InputTask;