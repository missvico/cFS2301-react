import styles from './Button.module.css';

function Button(props){
    return(
        <button onClick={props.handleClick} className={styles.button}>{props.symbol}</button>
    )
};

export default Button;