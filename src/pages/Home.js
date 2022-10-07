import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchArticles } from "../services/actions/articleActions"

const Home = (props) => {

    useEffect(() => {
        props.fetchArticles()
        // console.log(props.articles)
    }, [])

    return (
        <div>
            <h1>Welcome home</h1>
            <p>{props.articles.map(article => (article.id))}</p>
        </div>
    )
}

const mTp = (store) => {
    return {
        articles: store.articleR.articles
    }
}

export default connect(mTp, { fetchArticles }) (Home)