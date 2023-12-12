import { useEffect, useState } from "react"
import { getArticles } from "../api"
import {Link} from 'react-router-dom'

const ArticleList =({setArticle_id}) =>{


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
    const handleClick =(article_id) =>{
      setArticle_id(article_id)
    }
return <ul id="article-list">
            {    
            articles.map(article =>{
                return <section key={article.article_id} id="artile-list-item">
                    <Link to={{pathname:'/single-article-main', }}>
                    <li id="" onClick={()=>{handleClick(article.article_id)}}>{article.title}</li>
                    <img src={article.article_img_url} alt="" id="article-img" onClick={()=>{handleClick(article.article_id)}} />
                    </Link>
                </section> 
            })
        }
        </ul>
}

export default ArticleList