import axios from "axios";

const newsApi =axios.create({
    baseURL: "https://nc-backendapi.onrender.com/api",
  });

export const getTopics =()=>{
return newsApi.get(`/topics`)
}

export const getArticles =(query)=>{
return newsApi.get(`/articles${query}`)
}
export const getArticlesByArticleID =(article_id) =>{
return newsApi.get(`/articles/${article_id}`)
}
export const getCommentByArticleID =(article_id)=>{
return newsApi.get(`/articles/${article_id}/comments`)
}

export const addNewCommentByArticleId=(article_id,newComment)=>{
    return newsApi.post(`/articles/${article_id}/comments`,newComment)
}

export const updateArticleByArticleId =(article_id,updatedArticle)=>{
    return newsApi.patch(`/articles/${article_id}`,updatedArticle)
}

export const deleteCommentByCommentId=(comment_id)=>{
    return newsApi.delete(`/comments/${comment_id}`)
}