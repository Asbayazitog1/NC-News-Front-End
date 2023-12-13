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
return <section>
    <section id="article-details">
    <p>{article.title}</p>
    <img src={article.article_img_url} alt="" />
    <p>{article.body}</p>
    <section id="votes-section">
    <p id="votes-number">{article.votes}</p>
    <button id="votes-plus-button" onClick={handlePlusClick}>+</button>
    <button id="votes-minus-button" onClick={handleMinusButton}>-</button>
    <p>{err}</p>
    </section>
    
    <p>By: {article.author}</p>
    </section>
    <CommentList/>
</section>
}
export default SingleArticleMain