import { useEffect, useState } from "react"
import ArticleList from "./article-list"

const HomeMain =({setArticle_id}) =>{
   
    return <section>
    
        <ArticleList setArticle_id={setArticle_id}/>
    </section>

}
export default HomeMain