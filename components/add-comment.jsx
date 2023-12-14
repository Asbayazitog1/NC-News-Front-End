import { useState } from "react"
import { useParams } from "react-router-dom"
import { addNewCommentByArticleId } from "../api"

const AddComment =({setComments}) =>{
const [ishidden,setIsHidden]= useState(true)
const {article_id} = useParams()
const handleSubmit =(event) =>{
    event.preventDefault()
    
const newComment ={
    username:event.target[0].value ,
    body:event.target[1].value 
}

addNewCommentByArticleId(article_id,newComment).then(({data})=>{
setComments((currComments)=>{
    return [...currComments,data.comment]

})
}).catch((err)=>{

})
setIsHidden(!ishidden)
}
const handleClick=()=>{
setIsHidden(!ishidden)
}
if(ishidden){
    return <section><button onClick={handleClick}>
        Add comment
        </button></section>
}
return <form  onSubmit={handleSubmit}>
    <label htmlFor="username-input">Username:
        <input  type="text" name="" id="username-input" />
    </label>
    <label htmlFor="comment-input">comment:
        <input  type="text" name="" id="comment-input" />
    </label>
    <button type="submit" >submit</button>
</form>
}

export default AddComment