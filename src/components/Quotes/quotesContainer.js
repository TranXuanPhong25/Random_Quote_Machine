import styles from "./quotesContainer.module.scss"

function QuoteContainer({ color, data }) {
    return (
        <div className={styles.quote}>
            <p style={{ color: color }} className={styles.content}>{data.quote}</p>
            <p style={{ color: color }} className={styles.author}>- {data.author}</p>
        </div>
    )
}
export default QuoteContainer