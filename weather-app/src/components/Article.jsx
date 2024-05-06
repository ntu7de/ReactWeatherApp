import '../styles/Article.css'

const Article = ({ article }) => {

    return (
        <div className="article">
            <h4>{article.title}</h4>
            <p>{article.abstract}</p>
        </div>
    )
}

export default Article