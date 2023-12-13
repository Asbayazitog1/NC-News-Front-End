import { useEffect, useState } from "react"
import { getArticlesByArticleID, getCommentByArticleID} from "../api"
import { useParams } from 'react-router-dom';

const SingleArticleMain =()=>{
    const [comments,setComments] = useState([])
    const[ isloading,setIsloading] =useState(true)
    const [article,setArticle]=useState({})
    const{article_id} = useParams()
   useEffect(()=>{
    Promise.all([getArticlesByArticleID(article_id),getCommentByArticleID(article_id)])
    .then((result)=>{
       setArticle(result[0].data.articles)
       setComments(result[1].data.comments)
       setIsloading(false)
      
    })
   },[])
   if(isloading){
    return <h2>loading...</h2>
}
return <section>
    <section id="article-details">
    <p>{article.title}</p>
    <img src={article.article_img_url} alt="" />
    <p>{article.body}</p>
    <p>{article.votes}</p>
    <p>By: {article.author}</p>
    </section>
    <section id="comment-list">
    <ul>
        {comments.map(comment=>{
            return <section key={comment.comment_id}>
                <p>{comment.body}</p>
                <p>{comment.author}</p>
                <p>votes: {comment.votes}</p>
            </section>
        })}
    </ul>
    </section>
</section>
}
export default SingleArticleMain