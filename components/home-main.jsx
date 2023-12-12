import { useEffect, useState } from "react"
import { getArticles } from "../api"

const HomeMain =() =>{
    const [articles,setArticles]= useState([])
    useEffect(()=>{
        getArticles().then(({data}) =>{
            setArticles(data.articles)
        })
    },[])
return <section>
    
    <ul id="article-list">
        {    
        articles.map(article =>{
            return <section key={article.article_id} id="artile-list-item">
                <li id="" >{article.title}</li>
                <img src={article.article_img_url} alt="" id="article-img" />
            </section> 
        })
    }
    </ul>
</section>
}
export default HomeMain