import { useEffect, useState } from "react"
import { getArticlesByArticleID } from "../api"
import { useParams } from 'react-router-dom';

const SingleArticleMain =()=>{
    const[ isloading,setIsloading] =useState(true)
    const [article,setArticle]=useState({})
    const{article_id} = useParams()
   useEffect(()=>{
    
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