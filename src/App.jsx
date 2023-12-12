import { useState } from 'react'
import Header from '../components/header'
import './App.css'
import NavBar from '../components/nav-bar'
import HomeMain from '../components/home-main'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleArticleMain from '../components/single-article-main'

function App() {
  const[article_id,setArticle_id]=useState(0)

  return (
    <BrowserRouter>
    <div>
    <Header/>
      <NavBar/>
      <Routes>
        <Route path = '/' element={<HomeMain setArticle_id={setArticle_id}/>}/>
        <Route path = '/single-article-main' element={<SingleArticleMain article_id={article_id}/>}/>
      </Routes>
      
    </div>
      
    </BrowserRouter>
  )
}

export default App
