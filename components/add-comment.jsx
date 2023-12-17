import { useState } from "react"
import { useParams } from "react-router-dom"
import { addNewCommentByArticleId } from "../api"

const AddComment =({setComments}) =>{
const [commentInput,setCommentInput] = useState("")
const [erorr ,setErorr] = useState("")
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
setIsHidden(false)
setErorr("something went wrong, Try again!")
})
setIsHidden(!ishidden)
setErorr("")
}
const habdleChange =(event)=>{
setCommentInput(event.target.value)
 }
const handleClick=()=>{
setIsHidden(!ishidden)
}
if(ishidden){
    return <section><button onClick={handleClick}>
        Add comment
        </button></section>
}
return <form id="add-comment-form"  onSubmit={handleSubmit}>
    <label className="add-comment-content" htmlFor="username-input">Username:
        <input className="add-comment-content"  type="text" name="" id="username-input" />
    </label>
    <label className="add-comment-content"  htmlFor="add-comment-input">comment:
        <textarea className="add-comment-content"  value={commentInput} type="text" name="" id="add-comment-input" onChange={habdleChange} />
    </label>
    <button className="add-comment-content"  id="add-comment-submit-button" type="submit" >submit</button>
    <p className="add-comment-content"  id="error-msg">{erorr}</p>
</form>
}

export default AddComment