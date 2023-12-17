import { useEffect, useState } from "react"
import { getArticlesByArticleID, updateArticleByArticleId} from "../api"
import { useParams } from 'react-router-dom';
import CommentList from "./comment-list";

const SingleArticleMain =()=>{
    const [err,setErr] =useState("")
    const[ isloading,setIsloading] =useState(true)
    const [article,setArticle]=useState({})
    const{article_id} = useParams()
   useEffect(()=>{
    getArticlesByArticleID(article_id)
    .then(({data})=>{
       setArticle(data.articles)
       setIsloading(false)
      
    })
   },[])
   const handlePlusClick =() =>{
    setArticle((currArticle)=>{
    return {...currArticle,votes: currArticle.votes +1}
    })
    setErr("") 
    updateArticleByArticleId(article_id,{inc_votes:1}).catch((err) =>{
        setErr(err.message)
        setArticle((currArticle)=>{
            return {...currArticle,votes: currArticle.votes -1}
            })
    })
   }
   const handleMinusButton =()=>{
    setArticle((currArticle)=>{
        return {...currArticle,votes: currArticle.votes -1}
        })
    setErr("")    
        updateArticleByArticleId(article_id,{inc_votes:-1}).catch((err) =>{
            setErr(err.message)
            setArticle((currArticle)=>{
                return {...currArticle,votes: currArticle.votes +1}
                })
               
        })
   }
   if(isloading){
    return <h2>loading...</h2>
}
return <section id="single-article-section">
    <section id="article-details-section">
    <p id="single-article-title">{article.title}</p>
    <img id="single-article-img" src={article.article_img_url} alt="" />
    <p id="single-article-body">{article.body}</p>
    <section id="votes-section">
    <p id="single-article-votes-number">{article.votes}</p>
    <button id="single-article-votes-plus-button" onClick={handlePlusClick}>+</button>
    <button id="single-article-votes-minus-button" onClick={handleMinusButton}>-</button>
    <p id="single-article-error-msg" >{err}</p>
    </section>
    
    <p id="single-article-author">By: {article.author}</p>
    </section>
    <CommentList/>
</section>
}
export default SingleArticleMain