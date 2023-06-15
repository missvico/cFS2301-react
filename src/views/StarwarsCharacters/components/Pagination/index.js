function Pagination(props) {
    const pages = []
    for(let i=1; i<=Math.ceil(props.totalCharacters/10); i++){
        pages.push(
            <li className="page-item">
                <div className="page-link" name={i} onClick={props.handleClick} >
                {i}
                </div>
            </li>
        )
    }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
         <div className="page-link" name="previous" onClick={props.handleClick} >
            Previous
          </div>
        </li>
        {pages}
        <li className="page-item">
         <div className="page-link"  name="next"  onClick={props.handleClick} >
            Next
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
