function SingleTask(props){
    return(
        <li key={props.index}>
            {props.task}
            <button onClick={props.handleDelete} name={props.index}>Eliminar</button>
        </li>
    )
}

export default SingleTask