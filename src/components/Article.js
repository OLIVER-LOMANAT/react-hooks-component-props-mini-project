function Article({title, date, preview, minutes}) {
    
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            {date || "January 1, 1970"}
            <p>{preview}</p>
        </article>
    )
}

export default Article