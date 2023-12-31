import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { getCommentByArticleID } from "../api";
import AddComment from "./add-comment";
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
       },[comments])
       if(!commentExist){
        return <h2>No comments!</h2>
       }

       return <section id="comment-list">
        <AddComment setComments={setComments}/>
       <ul>
          {
          comments.map(comment=>{
              return <section id="comment-list-section" key={comment.comment_id}>
                  <p id="comment-body">{comment.body}</p>
                  <p id="comment-author">{comment.author}</p>
                  <p id="comment-votes">votes: {comment.votes}</p>
              </section>
          })}
      </ul>
      </section>
}
export default CommentList