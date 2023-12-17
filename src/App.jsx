import { useState } from 'react'
import Header from '../components/header'
import './App.css'
import NavBar from '../components/nav-bar'
import HomeMain from '../components/home-main'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleArticleMain from '../components/single-article-main'
import SingleTopic from '../components/single-topic-articles'

function App() {
  

  return (
    <BrowserRouter>
    <div>
    <Header/>
    <NavBar/>
      <Routes>
        <Route path = '/' element={<HomeMain />}/>
        <Route path = '/articles/:article_id' element={<SingleArticleMain />}/>
      </Routes>
      
    </div>
      
    </BrowserRouter>
  )
}

export default App
