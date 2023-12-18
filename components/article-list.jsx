import { useEffect, useState } from "react"
import { getArticles, getTopics } from "../api"
import {Link, useSearchParams} from 'react-router-dom'


const ArticleList =({topics}) =>{
    const [searchParams,setSearchParams] =useSearchParams({topic: ""})
    const[ isloading,setIsloading] =useState(true)
    const [articles,setArticles]= useState([])
    const topicQuery = searchParams.get("topic")
    const [query,setQuery] = useState(`?${topicQuery}`)
    const handleClick =(topic) =>{
        setIsloading(true)
        setArticles([])
        setSearchParams({topic: topic.slug})
        console.log(topic)
        
    }
    useEffect(()=>{
        console.log(query,"----useeffect")
        
        getArticles(query).then(({data}) =>{
                setArticles(data.articles)
                setQuery(`?${searchParams.toString()}`)
                setIsloading(false)
            })
        },[query,setSearchParams])
    if(isloading){
        return <h2>loading...</h2>
    }
    
return  <section id="article-list-section">
    <ul id="topics-list">{
        topics.map(topic =>{
        return <section key={topic.slug}>
        <button id="topic-list-buttons" onClick={()=>{
            handleClick(topic)
    }} >{topic.slug}</button> 
        </section>
        })
        }

    </ul>
    <ul id="article-list">
{    
articles.map(article =>{
    return <section key={article.article_id} id="artile-list-item">
        <Link to={`/articles/${article.article_id}`}>
        <img src={article.article_img_url} alt="" id="article-img" />    
        <p id="articles-list-item-title">{article.title}</p>
        </Link>
    </section> 
})
}
</ul></section>
}

export default ArticleList