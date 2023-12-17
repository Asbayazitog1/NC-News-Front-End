import { useEffect, useState } from "react"
import ArticleList from "./article-list"

import { getTopics } from "../api"

const HomeMain =() =>{
    const [topics,setTopics] = useState([])
    useEffect(()=>{
        getTopics().then(({data})=>{
            setTopics(data.topics)
        })
    },[])
    return <section>
       
        <ArticleList topics={topics} />
    </section>

}
export default HomeMain