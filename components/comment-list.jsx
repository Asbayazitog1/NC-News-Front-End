import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { getCommentByArticleID } from "../api";
const CommentList =() =>{
    const{article_id} = useParams()
    const [comments,setComments] = useState([])
    const [commentExist,setCommentExist] =useState(true)
    useEffect(()=>{
        getCommentByArticleID(article_id)
        .then(({data})=>{
           setComments(data.comments)
          if(data.comments.length === 0){
            setCommentExist(false)
          }
        })
       },[])
       if(!commentExist){
        return <h2>No comments!</h2>
       }

       return <section id="comment-list">
       <ul>
          {
          comments.map(comment=>{
              return <section key={comment.comment_id}>
                  <p>{comment.body}</p>
                  <p>{comment.author}</p>
                  <p>votes: {comment.votes}</p>
              </section>
          })}
      </ul>
      </section>
}
export default CommentList