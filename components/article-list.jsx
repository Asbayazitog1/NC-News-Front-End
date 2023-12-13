import { useEffect, useState } from "react"
import { getArticles } from "../api"
import {Link} from 'react-router-dom'

const ArticleList =() =>{


    const[ isloading,setIsloading] =useState(true)
    const [articles,setArticles]= useState([])
    useEffect(()=>{
        getArticles().then(({data}) =>{
            setArticles(data.articles)
            setIsloading(false)
        })
    },[])
    if(isloading){
        return <h2>loading...</h2>
    }
    
return <ul id="article-list">
            {    
            articles.map(article =>{
                return <section key={article.article_id} id="artile-list-item">
                    <Link to={`/articles/${article.article_id}`}>
                    <li id="">{article.title}</li>
                    <img src={article.article_img_url} alt="" id="article-img" />
                    </Link>
                </section> 
            })
        }
        </ul>
}

export default ArticleList