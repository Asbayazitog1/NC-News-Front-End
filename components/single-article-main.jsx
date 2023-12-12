import { useEffect, useState } from "react"
import { getArticlesByArticleID } from "../api"

const SingleArticleMain =({article_id})=>{
    const[ isloading,setIsloading] =useState(true)
    const [article,setArticle]=useState({})
   useEffect(()=>{
    console.log(article_id)
    getArticlesByArticleID(article_id).then(({data})=>{
        
       setArticle(data.articles)
       setIsloading(false)
    })
   },[])
   if(isloading){
    return <h2>loading...</h2>
}
return <section>
    <p>{article.title}</p>
    <img src={article.article_img_url} alt="" />
    <p>{article.body}</p>
    <p>{article.votes}</p>
    <p>By: {article.author}</p>
</section>
}
export default SingleArticleMain