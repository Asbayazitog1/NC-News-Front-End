import { useEffect, useState } from "react"
import { getArticles, getTopics } from "../api"
import {Link, useSearchParams} from 'react-router-dom'


const ArticleList =({topics}) =>{
    const [errMsg,setErrMsg] =useState()
    const [searchParams,setSearchParams] =useSearchParams({topic: "", sort_by: ""})
    const[ isloading,setIsloading] =useState(true)
    const [articles,setArticles]= useState([])
    const topicQuery = searchParams.get("topic")
    const [query,setQuery] = useState(`?${topicQuery}`)
    const handleClick =(topic) =>{
        setIsloading(true)
        setArticles([])
        setSearchParams({topic: topic.slug})
        
    }
    const handleInput =(event)=>{
      const sort_by = event.target.value 
      setSearchParams({...searchParams, sort_by:sort_by})
    }
    useEffect(()=>{
        
        getArticles(query).then(({data}) =>{
                setArticles(data.articles)
                setQuery(`?${searchParams.toString()}`)
                setIsloading(false)
            }).catch(err =>{
                
             setErrMsg(err.message)
            })
        },[query,setSearchParams])
    if(isloading){
        return <h2>loading...</h2>
    }else if(errMsg){
     return <h2>{errMsg}</h2>
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
    <form action=""><select name="Sort By" id="sort-by-select" onClick={()=>{handleInput(event)}} >
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
    </select></form>
    
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