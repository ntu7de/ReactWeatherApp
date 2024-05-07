import '../styles/Article.css'

const Article = ({ article }) => {

    // console.log(article.media[0]['media-metadata'][0]);
    console.log(article);

    return (
        <div className="article">
            <h4><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h4>
            {article.media[0] && article.media[0]['media-metadata'] && article.media[0]['media-metadata'][0] && (
                <img
                src={article.media[0]['media-metadata'][1].url}
                alt={article.media[0].caption}
                />
            )}
            <p>{article.abstract}</p>
        </div>
    )
}

export default Article